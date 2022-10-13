from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppFields:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    js: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'js' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
