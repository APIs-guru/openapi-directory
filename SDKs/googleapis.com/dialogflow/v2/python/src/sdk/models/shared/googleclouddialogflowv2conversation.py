from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2ConversationConversationStageEnum(str, Enum):
    CONVERSATION_STAGE_UNSPECIFIED = "CONVERSATION_STAGE_UNSPECIFIED"
    VIRTUAL_AGENT_STAGE = "VIRTUAL_AGENT_STAGE"
    HUMAN_ASSIST_STAGE = "HUMAN_ASSIST_STAGE"

class GoogleCloudDialogflowV2ConversationLifecycleStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationInput:
    r"""GoogleCloudDialogflowV2ConversationInput
    Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
    """
    
    conversation_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationProfile') }})
    conversation_stage: Optional[GoogleCloudDialogflowV2ConversationConversationStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationStage') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Conversation:
    r"""GoogleCloudDialogflowV2Conversation
    Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
    """
    
    conversation_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationProfile') }})
    conversation_stage: Optional[GoogleCloudDialogflowV2ConversationConversationStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationStage') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    lifecycle_state: Optional[GoogleCloudDialogflowV2ConversationLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleState') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone_number: Optional[GoogleCloudDialogflowV2ConversationPhoneNumber] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
