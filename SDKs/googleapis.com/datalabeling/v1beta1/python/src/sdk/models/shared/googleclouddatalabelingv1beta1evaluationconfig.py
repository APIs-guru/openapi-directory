from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationConfig:
    r"""GoogleCloudDatalabelingV1beta1EvaluationConfig
    Configuration details used for calculating evaluation metrics and creating an Evaluation.
    """
    
    bounding_box_evaluation_options: Optional[GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBoxEvaluationOptions') }})
    
