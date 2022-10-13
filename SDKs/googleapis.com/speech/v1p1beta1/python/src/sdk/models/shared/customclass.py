from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import classitem


@dataclass_json
@dataclass
class CustomClass:
    custom_class_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customClassId' }})
    items: Optional[List[classitem.ClassItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
