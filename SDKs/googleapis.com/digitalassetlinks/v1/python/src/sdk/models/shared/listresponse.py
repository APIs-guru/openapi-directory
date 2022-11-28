from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ListResponseErrorCodeEnum(str, Enum):
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
class ListResponse:
    r"""ListResponse
    Response message for the List call.
    """
    
    debug_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugString') }})
    error_code: Optional[List[ListResponseErrorCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAge') }})
    statements: Optional[List[Statement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statements') }})
    
