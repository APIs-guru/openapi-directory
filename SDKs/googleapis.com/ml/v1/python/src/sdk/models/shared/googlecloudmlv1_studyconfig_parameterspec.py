from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum(str, Enum):
    SCALE_TYPE_UNSPECIFIED = "SCALE_TYPE_UNSPECIFIED"
    UNIT_LINEAR_SCALE = "UNIT_LINEAR_SCALE"
    UNIT_LOG_SCALE = "UNIT_LOG_SCALE"
    UNIT_REVERSE_LOG_SCALE = "UNIT_REVERSE_LOG_SCALE"

class GoogleCloudMlV1StudyConfigParameterSpecTypeEnum(str, Enum):
    PARAMETER_TYPE_UNSPECIFIED = "PARAMETER_TYPE_UNSPECIFIED"
    DOUBLE = "DOUBLE"
    INTEGER = "INTEGER"
    CATEGORICAL = "CATEGORICAL"
    DISCRETE = "DISCRETE"


@dataclass_json
@dataclass
class GoogleCloudMlV1StudyConfigParameterSpec:
    r"""GoogleCloudMlV1StudyConfigParameterSpec
    Represents a single parameter to optimize.
    """
    
    categorical_value_spec: Optional[GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalValueSpec') }})
    child_parameter_specs: Optional[List[GoogleCloudMlV1StudyConfigParameterSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childParameterSpecs') }})
    discrete_value_spec: Optional[GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discreteValueSpec') }})
    double_value_spec: Optional[GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValueSpec') }})
    integer_value_spec: Optional[GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValueSpec') }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    parent_categorical_values: Optional[GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCategoricalValues') }})
    parent_discrete_values: Optional[GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDiscreteValues') }})
    parent_int_values: Optional[GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntValues') }})
    scale_type: Optional[GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleType') }})
    type: Optional[GoogleCloudMlV1StudyConfigParameterSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
