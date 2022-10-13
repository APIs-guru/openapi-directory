from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GooglePrivacyDlpV2SummaryResultCodeEnum(str, Enum):
    TRANSFORMATION_RESULT_CODE_UNSPECIFIED = "TRANSFORMATION_RESULT_CODE_UNSPECIFIED"
    SUCCESS = "SUCCESS"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2SummaryResult:
    code: Optional[GooglePrivacyDlpV2SummaryResultCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    
