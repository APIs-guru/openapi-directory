from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ErrorV1CodeEnum(str, Enum):
    UNAUTHORIZED = "unauthorized"
    NOT_FOUND = "not_found"
    HTTP_NOT_SUPPORTED = "http_not_supported"
    INVALID_METHOD = "invalid_method"
    INVALID_FORMAT = "invalid_format"
    INVALID_REQUEST = "invalid_request"
    INTERNAL_SERVER_ERROR = "internal_server_error"


@dataclass_json
@dataclass
class ErrorV1:
    r"""ErrorV1
    Object containing details about an [error](https://www.heraldapi.com/docs/errors).
    """
    
    code: ErrorV1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
