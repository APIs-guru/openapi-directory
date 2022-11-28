from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AppEngineHTTPTargetHTTPMethodEnum(str, Enum):
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
class AppEngineHTTPTarget:
    r"""AppEngineHTTPTarget
    App Engine target. The job will be pushed to a job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.
    """
    
    app_engine_routing: Optional[AppEngineRouting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineRouting') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    http_method: Optional[AppEngineHTTPTargetHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    relative_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeUri') }})
    
