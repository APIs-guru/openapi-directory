from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PowerFeedPhaseLabelEnum(str, Enum):
    SINGLE_PHASE = "Single phase"
    THREE_PHASE = "Three-phase"

class PowerFeedPhaseValueEnum(str, Enum):
    SINGLE_PHASE = "single-phase"
    THREE_PHASE = "three-phase"


@dataclass_json
@dataclass
class PowerFeedPhase:
    label: PowerFeedPhaseLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: PowerFeedPhaseValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
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
class PowerFeedStatus:
    label: PowerFeedStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: PowerFeedStatusValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class PowerFeedSupplyLabelEnum(str, Enum):
    AC = "AC"
    DC = "DC"

class PowerFeedSupplyValueEnum(str, Enum):
    AC = "ac"
    DC = "dc"


@dataclass_json
@dataclass
class PowerFeedSupply:
    label: PowerFeedSupplyLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: PowerFeedSupplyValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class PowerFeedTypeLabelEnum(str, Enum):
    PRIMARY = "Primary"
    REDUNDANT = "Redundant"

class PowerFeedTypeValueEnum(str, Enum):
    PRIMARY = "primary"
    REDUNDANT = "redundant"


@dataclass_json
@dataclass
class PowerFeedType:
    label: PowerFeedTypeLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: PowerFeedTypeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PowerFeed:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    power_panel: NestedPowerPanel = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('power_panel') }})
    amperage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amperage') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_utilization: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_utilization') }})
    phase: Optional[PowerFeedPhase] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase') }})
    rack: Optional[NestedRack] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack') }})
    status: Optional[PowerFeedStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    supply: Optional[PowerFeedSupply] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supply') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[PowerFeedType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    voltage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voltage') }})
    
