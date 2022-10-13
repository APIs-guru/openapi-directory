from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1responsemessagemixedaudiosegment


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio:
    segments: Optional[List[googleclouddialogflowv2beta1responsemessagemixedaudiosegment.GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
