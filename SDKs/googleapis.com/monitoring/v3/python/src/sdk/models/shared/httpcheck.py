from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HTTPCheckContentTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    URL_ENCODED = "URL_ENCODED"

class HTTPCheckRequestMethodEnum(str, Enum):
    METHOD_UNSPECIFIED = "METHOD_UNSPECIFIED"
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclass
class HTTPCheck:
    r"""HTTPCheck
    Information involved in an HTTP/HTTPS Uptime check request.
    """
    
    accepted_response_status_codes: Optional[List[ResponseStatusCode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptedResponseStatusCodes') }})
    auth_info: Optional[BasicAuthentication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authInfo') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    content_type: Optional[HTTPCheckContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    mask_headers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskHeaders') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    ping_config: Optional[PingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pingConfig') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    request_method: Optional[HTTPCheckRequestMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMethod') }})
    use_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useSsl') }})
    validate_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateSsl') }})
    
