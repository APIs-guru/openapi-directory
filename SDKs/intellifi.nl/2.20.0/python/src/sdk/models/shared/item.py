from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import geocoordsreadonly
from . import itemprotocol_enum
from . import technology_enum
from . import itemtype_enum


@dataclass_json
@dataclass
class Item:
    code_hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code_hex' }})
    config_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_request' }})
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    geo_coords: Optional[geocoordsreadonly.GeoCoordsReadOnly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geo_coords' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_present: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_present' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    location_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_request' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    move_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'move_count' }})
    protocol: Optional[itemprotocol_enum.ItemProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    sets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sets' }})
    technology: Optional[technology_enum.TechnologyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'technology' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_created' }})
    time_last_present: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_last_present' }})
    time_moved: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_moved' }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_updated' }})
    type: Optional[itemtype_enum.ItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
