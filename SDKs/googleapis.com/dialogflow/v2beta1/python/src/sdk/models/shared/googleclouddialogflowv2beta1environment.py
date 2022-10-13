from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1fulfillment
from . import googleclouddialogflowv2beta1texttospeechsettings

class GoogleCloudDialogflowV2beta1EnvironmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STOPPED = "STOPPED"
    LOADING = "LOADING"
    RUNNING = "RUNNING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Environment:
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fulfillment: Optional[googleclouddialogflowv2beta1fulfillment.GoogleCloudDialogflowV2beta1Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleCloudDialogflowV2beta1EnvironmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    text_to_speech_settings: Optional[googleclouddialogflowv2beta1texttospeechsettings.GoogleCloudDialogflowV2beta1TextToSpeechSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textToSpeechSettings' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
