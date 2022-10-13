from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__automatedstoppingconfig
from . import googlecloudmlv1_studyconfig_metricspec
from . import googlecloudmlv1_studyconfig_parameterspec

class GoogleCloudMlV1StudyConfigAlgorithmEnum(str, Enum):
    ALGORITHM_UNSPECIFIED = "ALGORITHM_UNSPECIFIED"
    GAUSSIAN_PROCESS_BANDIT = "GAUSSIAN_PROCESS_BANDIT"
    GRID_SEARCH = "GRID_SEARCH"
    RANDOM_SEARCH = "RANDOM_SEARCH"


@dataclass_json
@dataclass
class GoogleCloudMlV1StudyConfig:
    algorithm: Optional[GoogleCloudMlV1StudyConfigAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    automated_stopping_config: Optional[googlecloudmlv1__automatedstoppingconfig.GoogleCloudMlV1AutomatedStoppingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatedStoppingConfig' }})
    metrics: Optional[List[googlecloudmlv1_studyconfig_metricspec.GoogleCloudMlV1StudyConfigMetricSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    parameters: Optional[List[googlecloudmlv1_studyconfig_parameterspec.GoogleCloudMlV1StudyConfigParameterSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
