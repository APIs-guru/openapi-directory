from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1prcurve


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics:
    pr_curve: Optional[googleclouddatalabelingv1beta1prcurve.GoogleCloudDatalabelingV1beta1PrCurve] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prCurve' }})
    
