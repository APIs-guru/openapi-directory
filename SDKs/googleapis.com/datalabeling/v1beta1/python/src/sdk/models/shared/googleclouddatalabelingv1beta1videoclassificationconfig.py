from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspecsetconfig


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoClassificationConfig:
    annotation_spec_set_configs: Optional[List[googleclouddatalabelingv1beta1annotationspecsetconfig.GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecSetConfigs' }})
    apply_shot_detection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyShotDetection' }})
    
