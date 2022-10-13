from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1inputaudioconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AudioInput:
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    config: Optional[googleclouddialogflowv2beta1inputaudioconfig.GoogleCloudDialogflowV2beta1InputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    
