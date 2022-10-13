from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvideointelligencev1beta2_explicitcontentdetectionconfig
from . import googlecloudvideointelligencev1beta2_facedetectionconfig
from . import googlecloudvideointelligencev1beta2_labeldetectionconfig
from . import googlecloudvideointelligencev1beta2_objecttrackingconfig
from . import googlecloudvideointelligencev1beta2_persondetectionconfig
from . import googlecloudvideointelligencev1beta2_videosegment
from . import googlecloudvideointelligencev1beta2_shotchangedetectionconfig
from . import googlecloudvideointelligencev1beta2_speechtranscriptionconfig
from . import googlecloudvideointelligencev1beta2_textdetectionconfig


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1beta2VideoContext:
    explicit_content_detection_config: Optional[googlecloudvideointelligencev1beta2_explicitcontentdetectionconfig.GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitContentDetectionConfig' }})
    face_detection_config: Optional[googlecloudvideointelligencev1beta2_facedetectionconfig.GoogleCloudVideointelligenceV1beta2FaceDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faceDetectionConfig' }})
    label_detection_config: Optional[googlecloudvideointelligencev1beta2_labeldetectionconfig.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelDetectionConfig' }})
    object_tracking_config: Optional[googlecloudvideointelligencev1beta2_objecttrackingconfig.GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTrackingConfig' }})
    person_detection_config: Optional[googlecloudvideointelligencev1beta2_persondetectionconfig.GoogleCloudVideointelligenceV1beta2PersonDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personDetectionConfig' }})
    segments: Optional[List[googlecloudvideointelligencev1beta2_videosegment.GoogleCloudVideointelligenceV1beta2VideoSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    shot_change_detection_config: Optional[googlecloudvideointelligencev1beta2_shotchangedetectionconfig.GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shotChangeDetectionConfig' }})
    speech_transcription_config: Optional[googlecloudvideointelligencev1beta2_speechtranscriptionconfig.GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechTranscriptionConfig' }})
    text_detection_config: Optional[googlecloudvideointelligencev1beta2_textdetectionconfig.GoogleCloudVideointelligenceV1beta2TextDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textDetectionConfig' }})
    
