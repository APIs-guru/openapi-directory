from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1boundingboxevaluationoptions


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationConfig:
    bounding_box_evaluation_options: Optional[googleclouddatalabelingv1beta1boundingboxevaluationoptions.GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBoxEvaluationOptions' }})
    
