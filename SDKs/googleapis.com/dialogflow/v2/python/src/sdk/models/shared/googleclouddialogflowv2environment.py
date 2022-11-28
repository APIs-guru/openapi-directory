from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2EnvironmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STOPPED = "STOPPED"
    LOADING = "LOADING"
    RUNNING = "RUNNING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Environment:
    r"""GoogleCloudDialogflowV2Environment
    You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
    """
    
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fulfillment: Optional[GoogleCloudDialogflowV2Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillment') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudDialogflowV2EnvironmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    text_to_speech_settings: Optional[GoogleCloudDialogflowV2TextToSpeechSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textToSpeechSettings') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowV2EnvironmentInput:
    r"""GoogleCloudDialogflowV2EnvironmentInput
    You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
    """
    
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fulfillment: Optional[GoogleCloudDialogflowV2Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillment') }})
    text_to_speech_settings: Optional[GoogleCloudDialogflowV2TextToSpeechSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textToSpeechSettings') }})
    
