from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GooglePrivacyDlpV2SummaryResultCodeEnum(str, Enum):
    TRANSFORMATION_RESULT_CODE_UNSPECIFIED = "TRANSFORMATION_RESULT_CODE_UNSPECIFIED"
    SUCCESS = "SUCCESS"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2SummaryResult:
    r"""GooglePrivacyDlpV2SummaryResult
    A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.
    """
    
    code: Optional[GooglePrivacyDlpV2SummaryResultCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
