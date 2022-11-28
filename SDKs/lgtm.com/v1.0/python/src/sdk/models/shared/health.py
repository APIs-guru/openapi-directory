from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HealthStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    UP = "UP"
    DOWN = "DOWN"


@dataclass_json
@dataclass
class Health:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    details: Optional[dict[str, Health]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    status: Optional[HealthStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
