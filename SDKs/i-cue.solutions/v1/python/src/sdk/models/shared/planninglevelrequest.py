from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PlanningLevelRequestMethodEnum(str, Enum):
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
class PlanningLevelRequest:
    method: PlanningLevelRequestMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    planning_level_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('planningLevelId') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    data: Optional[List[PlanningLevelDataDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('override') }})
    params: Optional[PlanningLevelInfoRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    
