from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Color:
    blue: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blue' }})
    green: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'green' }})
    hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hex' }})
    number_of_pixel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_of_pixel' }})
    percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    red: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'red' }})
    
