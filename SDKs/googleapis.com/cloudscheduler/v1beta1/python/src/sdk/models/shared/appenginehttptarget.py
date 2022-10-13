from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appenginerouting

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
    app_engine_routing: Optional[appenginerouting.AppEngineRouting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineRouting' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    http_method: Optional[AppEngineHTTPTargetHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    relative_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeUri' }})
    
