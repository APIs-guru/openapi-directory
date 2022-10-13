from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import planninglevelinforequest

class PlanningLevelReRunRequestMethodEnum(str, Enum):
    AUTO_BEST_PICK = "AutoBestPick"
    BOX_JENKINS_PARAMETERIZED = "BoxJenkinsParameterized"
    BOX_JENKINS = "BoxJenkins"
    CROSTON_PARAMETERIZED = "CrostonParameterized"
    CROSTON = "Croston"
    DOUBLE_EXPONENTIAL_SMOOTHING_PARAMETERIZED = "DoubleExponentialSmoothingParameterized"
    DOUBLE_EXPONENTIAL_SMOOTHING = "DoubleExponentialSmoothing"
    HOLT_WINTERS_PARAMETERIZED = "HoltWintersParameterized"
    HOLT_WINTERS = "HoltWinters"
    SINGLE_EXPONENTIAL_SMOOTHING_PARAMETERIZED = "SingleExponentialSmoothingParameterized"
    SINGLE_EXPONENTIAL_SMOOTHING = "SingleExponentialSmoothing"
    I_CUE1_PARAMETERIZED = "iCUE1Parameterized"
    I_CUE1 = "iCUE1"
    I_CU_EGAMMA = "iCUEgamma"
    SIMPLE_MOVING_AVERAGE = "SimpleMovingAverage"
    EXTERNAL = "External"
    I_CU_EBETA = "iCUEbeta"


@dataclass_json
@dataclass
class PlanningLevelReRunRequest:
    method: PlanningLevelReRunRequestMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    params: Optional[planninglevelinforequest.PlanningLevelInfoRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    planning_level_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planningLevelId' }})
    
