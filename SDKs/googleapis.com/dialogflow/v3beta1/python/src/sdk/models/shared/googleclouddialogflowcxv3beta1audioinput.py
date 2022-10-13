from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1inputaudioconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1AudioInput:
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    config: Optional[googleclouddialogflowcxv3beta1inputaudioconfig.GoogleCloudDialogflowCxV3beta1InputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    
