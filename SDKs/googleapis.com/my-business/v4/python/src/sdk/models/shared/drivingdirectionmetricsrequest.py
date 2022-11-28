from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DrivingDirectionMetricsRequestNumDaysEnum(str, Enum):
    SEVEN = "SEVEN"
    THIRTY = "THIRTY"
    NINETY = "NINETY"


@dataclass_json
@dataclass
class DrivingDirectionMetricsRequest:
    r"""DrivingDirectionMetricsRequest
    A request for driving direction insights.
    """
    
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    num_days: Optional[DrivingDirectionMetricsRequestNumDaysEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numDays') }})
    
