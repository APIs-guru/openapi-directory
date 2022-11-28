from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudMlV1StudyConfigAlgorithmEnum(str, Enum):
    ALGORITHM_UNSPECIFIED = "ALGORITHM_UNSPECIFIED"
    GAUSSIAN_PROCESS_BANDIT = "GAUSSIAN_PROCESS_BANDIT"
    GRID_SEARCH = "GRID_SEARCH"
    RANDOM_SEARCH = "RANDOM_SEARCH"


@dataclass_json
@dataclass
class GoogleCloudMlV1StudyConfig:
    r"""GoogleCloudMlV1StudyConfig
    Represents configuration of a study.
    """
    
    algorithm: Optional[GoogleCloudMlV1StudyConfigAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    automated_stopping_config: Optional[GoogleCloudMlV1AutomatedStoppingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatedStoppingConfig') }})
    metrics: Optional[List[GoogleCloudMlV1StudyConfigMetricSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    parameters: Optional[List[GoogleCloudMlV1StudyConfigParameterSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
