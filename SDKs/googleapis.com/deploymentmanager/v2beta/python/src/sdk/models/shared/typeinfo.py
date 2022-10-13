from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import typeinfoschemainfo


@dataclass_json
@dataclass
class TypeInfo:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    documentation_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationLink' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema: Optional[typeinfoschemainfo.TypeInfoSchemaInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
