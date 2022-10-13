from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class CheckResponseErrorCodeEnum(str, Enum):
    ERROR_CODE_UNSPECIFIED = "ERROR_CODE_UNSPECIFIED"
    ERROR_CODE_INVALID_QUERY = "ERROR_CODE_INVALID_QUERY"
    ERROR_CODE_FETCH_ERROR = "ERROR_CODE_FETCH_ERROR"
    ERROR_CODE_FAILED_SSL_VALIDATION = "ERROR_CODE_FAILED_SSL_VALIDATION"
    ERROR_CODE_REDIRECT = "ERROR_CODE_REDIRECT"
    ERROR_CODE_TOO_LARGE = "ERROR_CODE_TOO_LARGE"
    ERROR_CODE_MALFORMED_HTTP_RESPONSE = "ERROR_CODE_MALFORMED_HTTP_RESPONSE"
    ERROR_CODE_WRONG_CONTENT_TYPE = "ERROR_CODE_WRONG_CONTENT_TYPE"
    ERROR_CODE_MALFORMED_CONTENT = "ERROR_CODE_MALFORMED_CONTENT"
    ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE = "ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE"
    ERROR_CODE_FETCH_BUDGET_EXHAUSTED = "ERROR_CODE_FETCH_BUDGET_EXHAUSTED"


@dataclass_json
@dataclass
class CheckResponse:
    debug_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugString' }})
    error_code: Optional[List[CheckResponseErrorCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    linked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linked' }})
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAge' }})
    
