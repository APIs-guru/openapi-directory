from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions:
    r"""GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions
    Options regarding evaluation between bounding boxes.
    """
    
    iou_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iouThreshold') }})
    
