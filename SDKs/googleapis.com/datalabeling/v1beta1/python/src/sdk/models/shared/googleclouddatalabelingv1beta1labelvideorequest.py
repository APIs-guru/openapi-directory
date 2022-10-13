from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1humanannotationconfig
from . import googleclouddatalabelingv1beta1eventconfig
from . import googleclouddatalabelingv1beta1objectdetectionconfig
from . import googleclouddatalabelingv1beta1objecttrackingconfig
from . import googleclouddatalabelingv1beta1videoclassificationconfig

class GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    CLASSIFICATION = "CLASSIFICATION"
    OBJECT_DETECTION = "OBJECT_DETECTION"
    OBJECT_TRACKING = "OBJECT_TRACKING"
    EVENT = "EVENT"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1LabelVideoRequest:
    basic_config: Optional[googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicConfig' }})
    event_config: Optional[googleclouddatalabelingv1beta1eventconfig.GoogleCloudDatalabelingV1beta1EventConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventConfig' }})
    feature: Optional[GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feature' }})
    object_detection_config: Optional[googleclouddatalabelingv1beta1objectdetectionconfig.GoogleCloudDatalabelingV1beta1ObjectDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectDetectionConfig' }})
    object_tracking_config: Optional[googleclouddatalabelingv1beta1objecttrackingconfig.GoogleCloudDatalabelingV1beta1ObjectTrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTrackingConfig' }})
    video_classification_config: Optional[googleclouddatalabelingv1beta1videoclassificationconfig.GoogleCloudDatalabelingV1beta1VideoClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoClassificationConfig' }})
    
