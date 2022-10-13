from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class WritablePowerFeedPhasePhaseEnum(str, Enum):
    SINGLE_PHASE = "single-phase"
    THREE_PHASE = "three-phase"

class WritablePowerFeedStatusStatusEnum(str, Enum):
    OFFLINE = "offline"
    ACTIVE = "active"
    PLANNED = "planned"
    FAILED = "failed"

class WritablePowerFeedSupplySupplyEnum(str, Enum):
    AC = "ac"
    DC = "dc"

class WritablePowerFeedTypeTypeEnum(str, Enum):
    PRIMARY = "primary"
    REDUNDANT = "redundant"


@dataclass_json
@dataclass
class WritablePowerFeed:
    amperage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amperage' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_utilization: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_utilization' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phase: Optional[WritablePowerFeedPhasePhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase' }})
    power_panel: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power_panel' }})
    rack: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack' }})
    status: Optional[WritablePowerFeedStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    supply: Optional[WritablePowerFeedSupplySupplyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supply' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[WritablePowerFeedTypeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    voltage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voltage' }})
    
