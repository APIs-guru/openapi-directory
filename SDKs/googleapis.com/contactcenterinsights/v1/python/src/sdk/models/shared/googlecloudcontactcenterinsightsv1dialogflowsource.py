from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1DialogflowSource:
    r"""GoogleCloudContactcenterinsightsV1DialogflowSource
    A Dialogflow source of conversation data.
    """
    
    audio_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioUri') }})
    dialogflow_conversation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowConversation') }})
    

@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1DialogflowSourceInput:
    r"""GoogleCloudContactcenterinsightsV1DialogflowSourceInput
    A Dialogflow source of conversation data.
    """
    
    audio_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioUri') }})
    
