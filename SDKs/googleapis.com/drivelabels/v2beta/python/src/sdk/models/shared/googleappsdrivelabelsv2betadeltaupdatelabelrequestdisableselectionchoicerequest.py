from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest
    Request to disable a Choice.
    """
    
    disabled_policy: Optional[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledPolicy') }})
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
