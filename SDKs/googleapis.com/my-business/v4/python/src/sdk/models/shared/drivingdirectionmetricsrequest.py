from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DrivingDirectionMetricsRequestNumDaysEnum(str, Enum):
    SEVEN = "SEVEN"
    THIRTY = "THIRTY"
    NINETY = "NINETY"


@dataclass_json
@dataclass
class DrivingDirectionMetricsRequest:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    num_days: Optional[DrivingDirectionMetricsRequestNumDaysEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numDays' }})
    
