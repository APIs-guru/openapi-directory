from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2inputaudioconfig
from . import googleclouddialogflowv2eventinput
from . import googleclouddialogflowv2textinput


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2QueryInput:
    audio_config: Optional[googleclouddialogflowv2inputaudioconfig.GoogleCloudDialogflowV2InputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioConfig' }})
    event: Optional[googleclouddialogflowv2eventinput.GoogleCloudDialogflowV2EventInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    text: Optional[googleclouddialogflowv2textinput.GoogleCloudDialogflowV2TextInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
