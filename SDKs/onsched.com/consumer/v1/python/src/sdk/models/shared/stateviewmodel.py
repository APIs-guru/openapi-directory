from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StateViewModel:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    
