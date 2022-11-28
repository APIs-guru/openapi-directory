from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1beta2VideoContext:
    r"""GoogleCloudVideointelligenceV1beta2VideoContext
    Video context and/or feature-specific parameters.
    """
    
    explicit_content_detection_config: Optional[GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitContentDetectionConfig') }})
    face_detection_config: Optional[GoogleCloudVideointelligenceV1beta2FaceDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceDetectionConfig') }})
    label_detection_config: Optional[GoogleCloudVideointelligenceV1beta2LabelDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelDetectionConfig') }})
    object_tracking_config: Optional[GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingConfig') }})
    person_detection_config: Optional[GoogleCloudVideointelligenceV1beta2PersonDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personDetectionConfig') }})
    segments: Optional[List[GoogleCloudVideointelligenceV1beta2VideoSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    shot_change_detection_config: Optional[GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shotChangeDetectionConfig') }})
    speech_transcription_config: Optional[GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechTranscriptionConfig') }})
    text_detection_config: Optional[GoogleCloudVideointelligenceV1beta2TextDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDetectionConfig') }})
    
