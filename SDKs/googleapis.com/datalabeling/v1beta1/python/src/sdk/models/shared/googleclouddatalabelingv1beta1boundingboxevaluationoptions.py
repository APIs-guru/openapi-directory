from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions:
    iou_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iouThreshold' }})
    
