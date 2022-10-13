from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedpowerpanel
from . import nestedrack

class PowerFeedPhaseLabelEnum(str, Enum):
    SINGLE_PHASE = "Single phase"
    THREE_PHASE = "Three-phase"

class PowerFeedPhaseValueEnum(str, Enum):
    SINGLE_PHASE = "single-phase"
    THREE_PHASE = "three-phase"


@dataclass_json
@dataclass
class PowerFeedPhasePhase:
    label: PowerFeedPhaseLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: PowerFeedPhaseValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class PowerFeedStatusLabelEnum(str, Enum):
    OFFLINE = "Offline"
    ACTIVE = "Active"
    PLANNED = "Planned"
    FAILED = "Failed"

class PowerFeedStatusValueEnum(str, Enum):
    OFFLINE = "offline"
    ACTIVE = "active"
    PLANNED = "planned"
    FAILED = "failed"


@dataclass_json
@dataclass
class PowerFeedStatusStatus:
    label: PowerFeedStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: PowerFeedStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class PowerFeedSupplyLabelEnum(str, Enum):
    AC = "AC"
    DC = "DC"

class PowerFeedSupplyValueEnum(str, Enum):
    AC = "ac"
    DC = "dc"


@dataclass_json
@dataclass
class PowerFeedSupplySupply:
    label: PowerFeedSupplyLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: PowerFeedSupplyValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class PowerFeedTypeLabelEnum(str, Enum):
    PRIMARY = "Primary"
    REDUNDANT = "Redundant"

class PowerFeedTypeValueEnum(str, Enum):
    PRIMARY = "primary"
    REDUNDANT = "redundant"


@dataclass_json
@dataclass
class PowerFeedTypeType:
    label: PowerFeedTypeLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: PowerFeedTypeValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class PowerFeed:
    amperage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amperage' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_utilization: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_utilization' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phase: Optional[PowerFeedPhasePhase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase' }})
    power_panel: nestedpowerpanel.NestedPowerPanel = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power_panel' }})
    rack: Optional[nestedrack.NestedRack] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack' }})
    status: Optional[PowerFeedStatusStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    supply: Optional[PowerFeedSupplySupply] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supply' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[PowerFeedTypeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    voltage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voltage' }})
    
