from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fieldmetadata


@dataclass_json
@dataclass
class Location:
    building_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildingId' }})
    current: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current' }})
    desk_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deskCode' }})
    floor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floor' }})
    floor_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorSection' }})
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
