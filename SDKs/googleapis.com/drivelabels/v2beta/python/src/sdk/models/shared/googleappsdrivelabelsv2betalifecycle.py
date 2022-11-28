from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsDriveLabelsV2betaLifecycleStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    UNPUBLISHED_DRAFT = "UNPUBLISHED_DRAFT"
    PUBLISHED = "PUBLISHED"
    DISABLED = "DISABLED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLifecycleInput:
    r"""GoogleAppsDriveLabelsV2betaLifecycleInput
    The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
    """
    
    disabled_policy: Optional[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledPolicy') }})
    

@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLifecycle:
    r"""GoogleAppsDriveLabelsV2betaLifecycle
    The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
    """
    
    disabled_policy: Optional[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledPolicy') }})
    has_unpublished_changes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUnpublishedChanges') }})
    state: Optional[GoogleAppsDriveLabelsV2betaLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
