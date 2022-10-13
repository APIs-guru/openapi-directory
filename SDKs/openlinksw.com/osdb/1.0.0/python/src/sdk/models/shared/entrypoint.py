from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import entrypointparameter

class EntryPointHTTPMethodEnum(str, Enum):
    GET = "GET"
    PUT = "PUT"
    POST = "POST"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class EntryPoint:
    content_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_types' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encoding_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding_types' }})
    http_method: EntryPointHTTPMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: List[entrypointparameter.EntryPointParameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_template: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url_template' }})
    
