from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1inputaudioconfig
from . import googleclouddialogflowv2beta1telephonydtmfevents
from . import googleclouddialogflowv2beta1eventinput
from . import googleclouddialogflowv2beta1textinput


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1QueryInput:
    audio_config: Optional[googleclouddialogflowv2beta1inputaudioconfig.GoogleCloudDialogflowV2beta1InputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioConfig' }})
    dtmf: Optional[googleclouddialogflowv2beta1telephonydtmfevents.GoogleCloudDialogflowV2beta1TelephonyDtmfEvents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dtmf' }})
    event: Optional[googleclouddialogflowv2beta1eventinput.GoogleCloudDialogflowV2beta1EventInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    text: Optional[googleclouddialogflowv2beta1textinput.GoogleCloudDialogflowV2beta1TextInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
