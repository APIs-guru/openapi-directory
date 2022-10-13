from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvideointelligencev1beta2_videocontext

class GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    LABEL_DETECTION = "LABEL_DETECTION"
    SHOT_CHANGE_DETECTION = "SHOT_CHANGE_DETECTION"
    EXPLICIT_CONTENT_DETECTION = "EXPLICIT_CONTENT_DETECTION"
    FACE_DETECTION = "FACE_DETECTION"
    SPEECH_TRANSCRIPTION = "SPEECH_TRANSCRIPTION"
    TEXT_DETECTION = "TEXT_DETECTION"
    OBJECT_TRACKING = "OBJECT_TRACKING"
    LOGO_RECOGNITION = "LOGO_RECOGNITION"
    PERSON_DETECTION = "PERSON_DETECTION"


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest:
    features: Optional[List[GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    input_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputContent' }})
    input_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputUri' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputUri' }})
    video_context: Optional[googlecloudvideointelligencev1beta2_videocontext.GoogleCloudVideointelligenceV1beta2VideoContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoContext' }})
    
