from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HyperparameterModelErrorTypeEnum(str, Enum):
    MEAN_ABSOLUTE_PERCENTAGE_ERROR = "MeanAbsolutePercentageError"
    MEAN_SQUARED_ERROR = "MeanSquaredError"
    MEAN_ABSOLUTE_ERROR = "MeanAbsoluteError"
    MEDIAN_ABSOLUTE_DEVIATION = "MedianAbsoluteDeviation"
    NONE = "None"


@dataclass_json
@dataclass
class HyperparameterModel:
    abc_classification_threshold_a: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abcClassificationThresholdA') }})
    abc_classification_threshold_b: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abcClassificationThresholdB') }})
    abc_classification_threshold_c: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abcClassificationThresholdC') }})
    discard_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discardData') }})
    error_type: Optional[HyperparameterModelErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    hold_out_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdOutPeriod') }})
    no_fcst: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noFcst') }})
    outlier_detection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outlierDetection') }})
    periodicity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodicity') }})
    xyz_classification_threshold_x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyzClassificationThresholdX') }})
    xyz_classification_threshold_y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyzClassificationThresholdY') }})
    xyz_classification_threshold_z: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyzClassificationThresholdZ') }})
    
