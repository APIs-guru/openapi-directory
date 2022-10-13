from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import headeroverride
from . import oauthtoken
from . import oidctoken
from . import urioverride

class HTTPTargetHTTPMethodEnum(str, Enum):
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
class HTTPTarget:
    header_overrides: Optional[List[headeroverride.HeaderOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerOverrides' }})
    http_method: Optional[HTTPTargetHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    oauth_token: Optional[oauthtoken.OAuthToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthToken' }})
    oidc_token: Optional[oidctoken.OidcToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidcToken' }})
    uri_override: Optional[urioverride.URIOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uriOverride' }})
    
