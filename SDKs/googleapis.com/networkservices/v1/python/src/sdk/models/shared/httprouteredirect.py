from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HTTPRouteRedirectResponseCodeEnum(str, Enum):
    RESPONSE_CODE_UNSPECIFIED = "RESPONSE_CODE_UNSPECIFIED"
    MOVED_PERMANENTLY_DEFAULT = "MOVED_PERMANENTLY_DEFAULT"
    FOUND = "FOUND"
    SEE_OTHER = "SEE_OTHER"
    TEMPORARY_REDIRECT = "TEMPORARY_REDIRECT"
    PERMANENT_REDIRECT = "PERMANENT_REDIRECT"


@dataclass_json
@dataclass
class HTTPRouteRedirect:
    host_redirect: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostRedirect' }})
    https_redirect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpsRedirect' }})
    path_redirect: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathRedirect' }})
    port_redirect: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portRedirect' }})
    prefix_rewrite: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixRewrite' }})
    response_code: Optional[HTTPRouteRedirectResponseCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCode' }})
    strip_query: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripQuery' }})
    
