from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlanningLevelHyperparameterResponseErrorTypeEnum(str, Enum):
    MEAN_ABSOLUTE_PERCENTAGE_ERROR = "MeanAbsolutePercentageError"
    MEAN_SQUARED_ERROR = "MeanSquaredError"
    MEAN_ABSOLUTE_ERROR = "MeanAbsoluteError"
    MEDIAN_ABSOLUTE_DEVIATION = "MedianAbsoluteDeviation"
    NONE = "None"


@dataclass_json
@dataclass
class PlanningLevelHyperparameterResponse:
    discard_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discardData') }})
    error_type: Optional[PlanningLevelHyperparameterResponseErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    hold_out_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdOutPeriod') }})
    no_fcst: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noFcst') }})
    periodicity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodicity') }})
    
