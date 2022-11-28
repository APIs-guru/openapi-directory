from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritablePowerFeedPhaseEnum(str, Enum):
    SINGLE_PHASE = "single-phase"
    THREE_PHASE = "three-phase"

class WritablePowerFeedStatusEnum(str, Enum):
    OFFLINE = "offline"
    ACTIVE = "active"
    PLANNED = "planned"
    FAILED = "failed"

class WritablePowerFeedSupplyEnum(str, Enum):
    AC = "ac"
    DC = "dc"

class WritablePowerFeedTypeEnum(str, Enum):
    PRIMARY = "primary"
    REDUNDANT = "redundant"


@dataclass_json
@dataclass
class WritablePowerFeedInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    power_panel: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('power_panel') }})
    amperage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amperage') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    max_utilization: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_utilization') }})
    phase: Optional[WritablePowerFeedPhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase') }})
    rack: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack') }})
    status: Optional[WritablePowerFeedStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    supply: Optional[WritablePowerFeedSupplyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supply') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[WritablePowerFeedTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    voltage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voltage') }})
    
