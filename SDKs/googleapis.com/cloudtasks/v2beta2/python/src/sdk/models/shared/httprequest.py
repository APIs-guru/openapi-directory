from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""HTTPRequest
    HTTP request. The task will be pushed to the worker as an HTTP request. An HTTP request embodies a url, an http method, headers, body and authorization for the http task.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    http_method: Optional[HTTPRequestHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    oauth_token: Optional[OAuthToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthToken') }})
    oidc_token: Optional[OidcToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcToken') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
