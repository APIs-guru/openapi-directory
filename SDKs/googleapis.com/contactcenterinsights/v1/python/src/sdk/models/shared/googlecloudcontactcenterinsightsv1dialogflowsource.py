from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1DialogflowSource:
    audio_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioUri' }})
    dialogflow_conversation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogflowConversation' }})
    
