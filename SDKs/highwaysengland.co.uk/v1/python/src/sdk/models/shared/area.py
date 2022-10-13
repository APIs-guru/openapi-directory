from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Area:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    x_latitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XLatitude' }})
    x_longitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XLongitude' }})
    y_latitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'YLatitude' }})
    y_longitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'YLongitude' }})
    
