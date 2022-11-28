from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest:
    r"""GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest
    Request message for CreateEvaluationJob.
    """
    
    job: Optional[GoogleCloudDatalabelingV1beta1EvaluationJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    
