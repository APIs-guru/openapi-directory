from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio:
    audio_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioUri' }})
    
