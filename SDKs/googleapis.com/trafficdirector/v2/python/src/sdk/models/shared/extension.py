from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import buildversion


@dataclass_json
@dataclass
class Extension:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type_descriptor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeDescriptor' }})
    version: Optional[buildversion.BuildVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
