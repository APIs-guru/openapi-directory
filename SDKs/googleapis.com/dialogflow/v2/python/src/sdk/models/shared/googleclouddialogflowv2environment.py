from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2fulfillment
from . import googleclouddialogflowv2texttospeechsettings

class GoogleCloudDialogflowV2EnvironmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STOPPED = "STOPPED"
    LOADING = "LOADING"
    RUNNING = "RUNNING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Environment:
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fulfillment: Optional[googleclouddialogflowv2fulfillment.GoogleCloudDialogflowV2Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleCloudDialogflowV2EnvironmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    text_to_speech_settings: Optional[googleclouddialogflowv2texttospeechsettings.GoogleCloudDialogflowV2TextToSpeechSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textToSpeechSettings' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
