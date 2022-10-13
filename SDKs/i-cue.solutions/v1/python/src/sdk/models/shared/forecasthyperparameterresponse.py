from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ForecastHyperparameterResponseErrorTypeEnum(str, Enum):
    MEAN_ABSOLUTE_PERCENTAGE_ERROR = "MeanAbsolutePercentageError"
    MEAN_SQUARED_ERROR = "MeanSquaredError"
    MEAN_ABSOLUTE_ERROR = "MeanAbsoluteError"
    MEDIAN_ABSOLUTE_DEVIATION = "MedianAbsoluteDeviation"
    NONE = "None"


@dataclass_json
@dataclass
class ForecastHyperparameterResponse:
    discard_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discardData' }})
    error_type: Optional[ForecastHyperparameterResponseErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorType' }})
    hold_out_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holdOutPeriod' }})
    no_fcst: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noFcst' }})
    periodicity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodicity' }})
    
