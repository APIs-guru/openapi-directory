from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum(str, Enum):
    LABEL_DETECTION_MODE_UNSPECIFIED = "LABEL_DETECTION_MODE_UNSPECIFIED"
    SHOT_MODE = "SHOT_MODE"
    FRAME_MODE = "FRAME_MODE"
    SHOT_AND_FRAME_MODE = "SHOT_AND_FRAME_MODE"


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1LabelDetectionConfig:
    frame_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameConfidenceThreshold' }})
    label_detection_mode: Optional[GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelDetectionMode' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    stationary_camera: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stationaryCamera' }})
    video_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoConfidenceThreshold' }})
    
