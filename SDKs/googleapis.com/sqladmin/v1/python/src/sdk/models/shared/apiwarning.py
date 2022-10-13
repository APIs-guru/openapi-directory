from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class APIWarningCodeEnum(str, Enum):
    SQL_API_WARNING_CODE_UNSPECIFIED = "SQL_API_WARNING_CODE_UNSPECIFIED"
    REGION_UNREACHABLE = "REGION_UNREACHABLE"
    MAX_RESULTS_EXCEEDS_LIMIT = "MAX_RESULTS_EXCEEDS_LIMIT"


@dataclass_json
@dataclass
class APIWarning:
    code: Optional[APIWarningCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
