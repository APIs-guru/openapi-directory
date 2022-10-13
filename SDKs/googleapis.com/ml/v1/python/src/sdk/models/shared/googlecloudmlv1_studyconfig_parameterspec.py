from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1_studyconfigparameterspec_categoricalvaluespec
from . import googlecloudmlv1_studyconfig_parameterspec
from . import googlecloudmlv1_studyconfigparameterspec_discretevaluespec
from . import googlecloudmlv1_studyconfigparameterspec_doublevaluespec
from . import googlecloudmlv1_studyconfigparameterspec_integervaluespec
from . import googlecloudmlv1_studyconfigparameterspec_matchingparentcategoricalvaluespec
from . import googlecloudmlv1_studyconfigparameterspec_matchingparentdiscretevaluespec
from . import googlecloudmlv1_studyconfigparameterspec_matchingparentintvaluespec

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
    categorical_value_spec: Optional[googlecloudmlv1_studyconfigparameterspec_categoricalvaluespec.GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoricalValueSpec' }})
    child_parameter_specs: Optional[List[googlecloudmlv1_studyconfig_parameterspec.GoogleCloudMlV1StudyConfigParameterSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childParameterSpecs' }})
    discrete_value_spec: Optional[googlecloudmlv1_studyconfigparameterspec_discretevaluespec.GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discreteValueSpec' }})
    double_value_spec: Optional[googlecloudmlv1_studyconfigparameterspec_doublevaluespec.GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValueSpec' }})
    integer_value_spec: Optional[googlecloudmlv1_studyconfigparameterspec_integervaluespec.GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValueSpec' }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    parent_categorical_values: Optional[googlecloudmlv1_studyconfigparameterspec_matchingparentcategoricalvaluespec.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentCategoricalValues' }})
    parent_discrete_values: Optional[googlecloudmlv1_studyconfigparameterspec_matchingparentdiscretevaluespec.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentDiscreteValues' }})
    parent_int_values: Optional[googlecloudmlv1_studyconfigparameterspec_matchingparentintvaluespec.GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentIntValues' }})
    scale_type: Optional[GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleType' }})
    type: Optional[GoogleCloudMlV1StudyConfigParameterSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
