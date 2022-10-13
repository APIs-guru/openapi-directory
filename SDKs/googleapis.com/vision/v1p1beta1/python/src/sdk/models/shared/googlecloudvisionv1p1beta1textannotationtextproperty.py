from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1textannotationdetectedbreak
from . import googlecloudvisionv1p1beta1textannotationdetectedlanguage


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1TextAnnotationTextProperty:
    detected_break: Optional[googlecloudvisionv1p1beta1textannotationdetectedbreak.GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedBreak' }})
    detected_languages: Optional[List[googlecloudvisionv1p1beta1textannotationdetectedlanguage.GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    
