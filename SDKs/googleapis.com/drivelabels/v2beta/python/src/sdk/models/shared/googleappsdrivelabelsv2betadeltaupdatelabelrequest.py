from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum(str, Enum):
    LABEL_VIEW_BASIC = "LABEL_VIEW_BASIC"
    LABEL_VIEW_FULL = "LABEL_VIEW_FULL"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput
    The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
    """
    
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    requests: Optional[List[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    view: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    write_control: Optional[GoogleAppsDriveLabelsV2betaWriteControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
