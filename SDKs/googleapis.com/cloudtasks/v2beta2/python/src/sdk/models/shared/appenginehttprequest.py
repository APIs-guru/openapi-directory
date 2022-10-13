from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appenginerouting

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
    app_engine_routing: Optional[appenginerouting.AppEngineRouting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineRouting' }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    http_method: Optional[AppEngineHTTPRequestHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    relative_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeUrl' }})
    
