from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import responsestatuscode
from . import basicauthentication
from . import pingconfig

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
    accepted_response_status_codes: Optional[List[responsestatuscode.ResponseStatusCode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptedResponseStatusCodes' }})
    auth_info: Optional[basicauthentication.BasicAuthentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authInfo' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    content_type: Optional[HTTPCheckContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    mask_headers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maskHeaders' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    ping_config: Optional[pingconfig.PingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pingConfig' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    request_method: Optional[HTTPCheckRequestMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMethod' }})
    use_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useSsl' }})
    validate_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateSsl' }})
    
