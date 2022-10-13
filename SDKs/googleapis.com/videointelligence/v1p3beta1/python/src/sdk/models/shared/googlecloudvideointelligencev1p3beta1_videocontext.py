from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig
from . import googlecloudvideointelligencev1p3beta1_facedetectionconfig
from . import googlecloudvideointelligencev1p3beta1_labeldetectionconfig
from . import googlecloudvideointelligencev1p3beta1_objecttrackingconfig
from . import googlecloudvideointelligencev1p3beta1_persondetectionconfig
from . import googlecloudvideointelligencev1p3beta1_videosegment
from . import googlecloudvideointelligencev1p3beta1_shotchangedetectionconfig
from . import googlecloudvideointelligencev1p3beta1_speechtranscriptionconfig
from . import googlecloudvideointelligencev1p3beta1_textdetectionconfig


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1p3beta1VideoContext:
    explicit_content_detection_config: Optional[googlecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig.GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitContentDetectionConfig' }})
    face_detection_config: Optional[googlecloudvideointelligencev1p3beta1_facedetectionconfig.GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faceDetectionConfig' }})
    label_detection_config: Optional[googlecloudvideointelligencev1p3beta1_labeldetectionconfig.GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelDetectionConfig' }})
    object_tracking_config: Optional[googlecloudvideointelligencev1p3beta1_objecttrackingconfig.GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTrackingConfig' }})
    person_detection_config: Optional[googlecloudvideointelligencev1p3beta1_persondetectionconfig.GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personDetectionConfig' }})
    segments: Optional[List[googlecloudvideointelligencev1p3beta1_videosegment.GoogleCloudVideointelligenceV1p3beta1VideoSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    shot_change_detection_config: Optional[googlecloudvideointelligencev1p3beta1_shotchangedetectionconfig.GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shotChangeDetectionConfig' }})
    speech_transcription_config: Optional[googlecloudvideointelligencev1p3beta1_speechtranscriptionconfig.GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechTranscriptionConfig' }})
    text_detection_config: Optional[googlecloudvideointelligencev1p3beta1_textdetectionconfig.GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textDetectionConfig' }})
    
