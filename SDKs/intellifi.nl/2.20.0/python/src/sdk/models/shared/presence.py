from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import item
from . import location
from . import proximity_enum
from . import technology_enum


@dataclass_json
@dataclass
class Presence:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item: Optional[item.Item] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_id' }})
    item_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_url' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    location_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_url' }})
    proximity: Optional[proximity_enum.ProximityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximity' }})
    technology: Optional[technology_enum.TechnologyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'technology' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_created' }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_updated' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
