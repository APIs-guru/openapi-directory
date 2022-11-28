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
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest
    Request to disable the Field.
    """
    
    disabled_policy: Optional[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledPolicy') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
