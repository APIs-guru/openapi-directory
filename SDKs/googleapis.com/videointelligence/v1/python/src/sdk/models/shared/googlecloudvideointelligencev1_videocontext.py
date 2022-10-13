from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvideointelligencev1_explicitcontentdetectionconfig
from . import googlecloudvideointelligencev1_facedetectionconfig
from . import googlecloudvideointelligencev1_labeldetectionconfig
from . import googlecloudvideointelligencev1_objecttrackingconfig
from . import googlecloudvideointelligencev1_persondetectionconfig
from . import googlecloudvideointelligencev1_videosegment
from . import googlecloudvideointelligencev1_shotchangedetectionconfig
from . import googlecloudvideointelligencev1_speechtranscriptionconfig
from . import googlecloudvideointelligencev1_textdetectionconfig


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1VideoContext:
    explicit_content_detection_config: Optional[googlecloudvideointelligencev1_explicitcontentdetectionconfig.GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitContentDetectionConfig' }})
    face_detection_config: Optional[googlecloudvideointelligencev1_facedetectionconfig.GoogleCloudVideointelligenceV1FaceDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faceDetectionConfig' }})
    label_detection_config: Optional[googlecloudvideointelligencev1_labeldetectionconfig.GoogleCloudVideointelligenceV1LabelDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelDetectionConfig' }})
    object_tracking_config: Optional[googlecloudvideointelligencev1_objecttrackingconfig.GoogleCloudVideointelligenceV1ObjectTrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTrackingConfig' }})
    person_detection_config: Optional[googlecloudvideointelligencev1_persondetectionconfig.GoogleCloudVideointelligenceV1PersonDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personDetectionConfig' }})
    segments: Optional[List[googlecloudvideointelligencev1_videosegment.GoogleCloudVideointelligenceV1VideoSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    shot_change_detection_config: Optional[googlecloudvideointelligencev1_shotchangedetectionconfig.GoogleCloudVideointelligenceV1ShotChangeDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shotChangeDetectionConfig' }})
    speech_transcription_config: Optional[googlecloudvideointelligencev1_speechtranscriptionconfig.GoogleCloudVideointelligenceV1SpeechTranscriptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechTranscriptionConfig' }})
    text_detection_config: Optional[googlecloudvideointelligencev1_textdetectionconfig.GoogleCloudVideointelligenceV1TextDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textDetectionConfig' }})
    
