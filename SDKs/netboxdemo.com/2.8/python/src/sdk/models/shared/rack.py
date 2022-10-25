from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedrackgroup
from . import nestedrackrole
from . import nestedsite
from . import nestedtenant

class RackOuterUnitLabelEnum(str, Enum):
    MILLIMETERS = "Millimeters"
    INCHES = "Inches"

class RackOuterUnitValueEnum(str, Enum):
    MM = "mm"
    IN = "in"


@dataclass_json
@dataclass
class RackOuterUnit:
    label: RackOuterUnitLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: RackOuterUnitValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class RackStatusLabelEnum(str, Enum):
    RESERVED = "Reserved"
    AVAILABLE = "Available"
    PLANNED = "Planned"
    ACTIVE = "Active"
    DEPRECATED = "Deprecated"

class RackStatusValueEnum(str, Enum):
    RESERVED = "reserved"
    AVAILABLE = "available"
    PLANNED = "planned"
    ACTIVE = "active"
    DEPRECATED = "deprecated"


@dataclass_json
@dataclass
class RackStatus:
    label: RackStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: RackStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class RackTypeLabelEnum(str, Enum):
    TWO_POST_FRAME = "2-post frame"
    FOUR_POST_FRAME = "4-post frame"
    FOUR_POST_CABINET = "4-post cabinet"
    WALL_MOUNTED_FRAME = "Wall-mounted frame"
    WALL_MOUNTED_CABINET = "Wall-mounted cabinet"

class RackTypeValueEnum(str, Enum):
    TWO_POST_FRAME = "2-post-frame"
    FOUR_POST_FRAME = "4-post-frame"
    FOUR_POST_CABINET = "4-post-cabinet"
    WALL_FRAME = "wall-frame"
    WALL_CABINET = "wall-cabinet"


@dataclass_json
@dataclass
class RackType:
    label: RackTypeLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: RackTypeValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class RackWidthLabelEnum(str, Enum):
    TEN_INCHES = "10 inches"
    NINETEEN_INCHES = "19 inches"
    TWENTY_ONE_INCHES = "21 inches"
    TWENTY_THREE_INCHES = "23 inches"


@dataclass_json
@dataclass
class RackWidth:
    label: RackWidthLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Rack:
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_tag' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    desc_units: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc_units' }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_count' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    facility_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facility_id' }})
    group: Optional[nestedrackgroup.NestedRackGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outer_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outer_depth' }})
    outer_unit: Optional[RackOuterUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outer_unit' }})
    outer_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outer_width' }})
    powerfeed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powerfeed_count' }})
    role: Optional[nestedrackrole.NestedRackRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    site: nestedsite.NestedSite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    status: Optional[RackStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    type: Optional[RackType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'u_height' }})
    width: Optional[RackWidth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
