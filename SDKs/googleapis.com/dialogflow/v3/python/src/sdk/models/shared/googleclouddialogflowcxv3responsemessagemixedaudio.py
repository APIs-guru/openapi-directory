from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3responsemessagemixedaudiosegment


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ResponseMessageMixedAudio:
    segments: Optional[List[googleclouddialogflowcxv3responsemessagemixedaudiosegment.GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
