from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import query_properties


@dataclass_json
@dataclass
class Query:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pack: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pack' }})
    properties: Optional[query_properties.QueryProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
