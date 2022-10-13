from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1responsemessagemixedaudiosegment


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio:
    segments: Optional[List[googleclouddialogflowcxv3beta1responsemessagemixedaudiosegment.GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
