from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    CLASSIFICATION = "CLASSIFICATION"
    OBJECT_DETECTION = "OBJECT_DETECTION"
    OBJECT_TRACKING = "OBJECT_TRACKING"
    EVENT = "EVENT"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1LabelVideoRequest:
    r"""GoogleCloudDatalabelingV1beta1LabelVideoRequest
    Request message for LabelVideo.
    """
    
    basic_config: Optional[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicConfig') }})
    event_config: Optional[GoogleCloudDatalabelingV1beta1EventConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventConfig') }})
    feature: Optional[GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feature') }})
    object_detection_config: Optional[GoogleCloudDatalabelingV1beta1ObjectDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectDetectionConfig') }})
    object_tracking_config: Optional[GoogleCloudDatalabelingV1beta1ObjectTrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingConfig') }})
    video_classification_config: Optional[GoogleCloudDatalabelingV1beta1VideoClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoClassificationConfig') }})
    
