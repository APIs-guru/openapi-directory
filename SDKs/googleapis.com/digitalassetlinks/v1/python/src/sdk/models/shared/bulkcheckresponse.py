from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BulkCheckResponseBulkErrorCodeEnum(str, Enum):
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
class BulkCheckResponse:
    r"""BulkCheckResponse
    Response for BulkCheck call. Results are sent in a list in the same order in which they were sent. Individual check errors are described in the appropriate check_results entry. If the entire call fails, the response will include a bulk_error_code field describing the error.
    """
    
    bulk_error_code: Optional[BulkCheckResponseBulkErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulkErrorCode') }})
    check_results: Optional[List[CheckResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkResults') }})
    
