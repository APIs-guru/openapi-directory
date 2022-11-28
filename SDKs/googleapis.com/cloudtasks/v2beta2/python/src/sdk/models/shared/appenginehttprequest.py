from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AppEngineHTTPRequestHTTPMethodEnum(str, Enum):
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
class AppEngineHTTPRequest:
    r"""AppEngineHTTPRequest
    App Engine HTTP request. The message defines the HTTP request that is sent to an App Engine app when the task is dispatched. This proto can only be used for tasks in a queue which has app_engine_http_target set. Using AppEngineHttpRequest requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform` The task will be delivered to the App Engine app which belongs to the same project as the queue. For more information, see [How Requests are Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and how routing is affected by [dispatch files](https://cloud.google.com/appengine/docs/python/config/dispatchref). Traffic is encrypted during transport and never leaves Google datacenters. Because this traffic is carried over a communication mechanism internal to Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS). The request to the handler, however, will appear to have used the HTTP protocol. The AppEngineRouting used to construct the URL that the task is delivered to can be set at the queue-level or task-level: * If set, app_engine_routing_override is used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing. The `url` that the task will be sent to is: * `url =` host `+` relative_url Tasks can be dispatched to secure app handlers, unsecure app handlers, and URIs restricted with [`login: admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref). Because tasks are not run as any user, they cannot be dispatched to URIs restricted with [`login: required`](https://cloud.google.com/appengine/docs/standard/python/config/appref) Task dispatches also do not follow redirects. The task attempt has succeeded if the app's request handler returns an HTTP response code in the range [`200` - `299`]. The task attempt has failed if the app's handler returns a non-2xx response code or Cloud Tasks does not receive response before the deadline. Failed tasks will be retried according to the retry configuration. `503` (Service Unavailable) is considered an App Engine system error instead of an application error and will cause Cloud Tasks' traffic congestion control to temporarily throttle the queue's dispatches. Unlike other types of task targets, a `429` (Too Many Requests) response from an app handler does not cause traffic congestion control to throttle the queue.
    """
    
    app_engine_routing: Optional[AppEngineRouting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineRouting') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    http_method: Optional[AppEngineHTTPRequestHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    relative_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeUrl') }})
    
