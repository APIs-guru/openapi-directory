from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import basetype
from . import typelabelentry
from . import operation


@dataclass_json
@dataclass
class Type:
    base: Optional[basetype.BaseType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTime' }})
    labels: Optional[List[typelabelentry.TypeLabelEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
