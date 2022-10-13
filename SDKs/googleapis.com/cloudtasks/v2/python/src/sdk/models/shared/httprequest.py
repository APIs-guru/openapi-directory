from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import oauthtoken
from . import oidctoken

class HTTPRequestHTTPMethodEnum(str, Enum):
    HTTP_METHOD_UNSPECIFIED = "HTTP_METHOD_UNSPECIFIED"
    POST = "POST"
    GET = "GET"
    HEAD = "HEAD"
    PUT = "PUT"
    DELETE = "DELETE"
    PATCH = "PATCH"
    OPTIONS = "OPTIONS"


@dataclass_json
@dataclass
class HTTPRequest:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    http_method: Optional[HTTPRequestHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    oauth_token: Optional[oauthtoken.OAuthToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthToken' }})
    oidc_token: Optional[oidctoken.OidcToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidcToken' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
