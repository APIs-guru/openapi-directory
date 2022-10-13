from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1classificationmetrics
from . import googleclouddatalabelingv1beta1objectdetectionmetrics


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationMetrics:
    classification_metrics: Optional[googleclouddatalabelingv1beta1classificationmetrics.GoogleCloudDatalabelingV1beta1ClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationMetrics' }})
    object_detection_metrics: Optional[googleclouddatalabelingv1beta1objectdetectionmetrics.GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectDetectionMetrics' }})
    
