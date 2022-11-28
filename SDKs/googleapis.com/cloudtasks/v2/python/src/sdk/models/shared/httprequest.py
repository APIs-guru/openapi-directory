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
    HTTP request. The task will be pushed to the worker as an HTTP request. If the worker or the redirected worker acknowledges the task by returning a successful HTTP response code ([`200` - `299`]), the task will be removed from the queue. If any other HTTP response code is returned or no response is received, the task will be retried according to the following: * User-specified throttling: retry configuration, rate limits, and the queue's state. * System throttling: To prevent the worker from overloading, Cloud Tasks may temporarily reduce the queue's effective rate. User-specified settings will not be changed. System throttling happens because: * Cloud Tasks backs off on all errors. Normally the backoff specified in rate limits will be used. But if the worker returns `429` (Too Many Requests), `503` (Service Unavailable), or the rate of errors is high, Cloud Tasks will use a higher backoff rate. The retry specified in the `Retry-After` HTTP response header is considered. * To prevent traffic spikes and to smooth sudden increases in traffic, dispatches ramp up slowly when the queue is newly created or idle and if large numbers of tasks suddenly become available to dispatch (due to spikes in create task rates, the queue being unpaused, or many tasks that are scheduled at the same time).
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    http_method: Optional[HTTPRequestHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    oauth_token: Optional[OAuthToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthToken') }})
    oidc_token: Optional[OidcToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcToken') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
