from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class ThrottlingSettingsPeriodEnum(str, Enum):
    SECONDLY = "SECONDLY"
    ROLLING_MINUTE = "ROLLING_MINUTE"


@dataclass_json
@dataclass
class ThrottlingSettings:
    max_concurrent_requests: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConcurrentRequests' }})
    period: ThrottlingSettingsPeriodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    
