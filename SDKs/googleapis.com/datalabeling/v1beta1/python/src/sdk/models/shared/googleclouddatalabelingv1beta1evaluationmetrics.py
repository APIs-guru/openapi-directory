from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationMetrics:
    classification_metrics: Optional[GoogleCloudDatalabelingV1beta1ClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationMetrics') }})
    object_detection_metrics: Optional[GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectDetectionMetrics') }})
    
