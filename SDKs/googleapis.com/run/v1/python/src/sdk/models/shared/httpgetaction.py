from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpheader


@dataclass_json
@dataclass
class HTTPGetAction:
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    http_headers: Optional[List[httpheader.HTTPHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpHeaders' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    
