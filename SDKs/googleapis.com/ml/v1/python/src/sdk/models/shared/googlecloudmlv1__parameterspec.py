from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudMlV1ParameterSpecScaleTypeEnum(str, Enum):
    NONE = "NONE"
    UNIT_LINEAR_SCALE = "UNIT_LINEAR_SCALE"
    UNIT_LOG_SCALE = "UNIT_LOG_SCALE"
    UNIT_REVERSE_LOG_SCALE = "UNIT_REVERSE_LOG_SCALE"

class GoogleCloudMlV1ParameterSpecTypeEnum(str, Enum):
    PARAMETER_TYPE_UNSPECIFIED = "PARAMETER_TYPE_UNSPECIFIED"
    DOUBLE = "DOUBLE"
    INTEGER = "INTEGER"
    CATEGORICAL = "CATEGORICAL"
    DISCRETE = "DISCRETE"


@dataclass_json
@dataclass
class GoogleCloudMlV1ParameterSpec:
    categorical_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoricalValues' }})
    discrete_values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discreteValues' }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterName' }})
    scale_type: Optional[GoogleCloudMlV1ParameterSpecScaleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleType' }})
    type: Optional[GoogleCloudMlV1ParameterSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
