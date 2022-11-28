from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""HTTPTarget
    HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.
    """
    
    header_overrides: Optional[List[HeaderOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerOverrides') }})
    http_method: Optional[HTTPTargetHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    oauth_token: Optional[OAuthToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthToken') }})
    oidc_token: Optional[OidcToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcToken') }})
    uri_override: Optional[URIOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uriOverride') }})
    
