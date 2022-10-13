from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PlanningLevelInfoRequestErrorTypeEnum(str, Enum):
    MEAN_ABSOLUTE_PERCENTAGE_ERROR = "MeanAbsolutePercentageError"
    MEAN_SQUARED_ERROR = "MeanSquaredError"
    MEAN_ABSOLUTE_ERROR = "MeanAbsoluteError"
    MEDIAN_ABSOLUTE_DEVIATION = "MedianAbsoluteDeviation"
    NONE = "None"


@dataclass_json
@dataclass
class PlanningLevelInfoRequest:
    discard_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discardData' }})
    error_type: Optional[PlanningLevelInfoRequestErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorType' }})
    hold_out_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holdOutPeriod' }})
    no_fcst: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noFcst' }})
    outlier_detection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlierDetection' }})
    periodicity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodicity' }})
    
