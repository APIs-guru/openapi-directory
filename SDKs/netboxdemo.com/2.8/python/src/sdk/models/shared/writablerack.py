from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class WritableRackOuterUnitEnum(str, Enum):
    MM = "mm"
    IN = "in"

class WritableRackStatusEnum(str, Enum):
    RESERVED = "reserved"
    AVAILABLE = "available"
    PLANNED = "planned"
    ACTIVE = "active"
    DEPRECATED = "deprecated"

class WritableRackTypeEnum(str, Enum):
    TWO_POST_FRAME = "2-post-frame"
    FOUR_POST_FRAME = "4-post-frame"
    FOUR_POST_CABINET = "4-post-cabinet"
    WALL_FRAME = "wall-frame"
    WALL_CABINET = "wall-cabinet"


@dataclass_json
@dataclass
class WritableRack:
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_tag' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    desc_units: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc_units' }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_count' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    facility_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facility_id' }})
    group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outer_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outer_depth' }})
    outer_unit: Optional[WritableRackOuterUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outer_unit' }})
    outer_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outer_width' }})
    powerfeed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powerfeed_count' }})
    role: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    site: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    status: Optional[WritableRackStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    type: Optional[WritableRackTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'u_height' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
