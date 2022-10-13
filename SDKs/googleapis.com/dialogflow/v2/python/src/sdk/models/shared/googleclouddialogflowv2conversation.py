from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2conversationphonenumber

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
class GoogleCloudDialogflowV2Conversation:
    conversation_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationProfile' }})
    conversation_stage: Optional[GoogleCloudDialogflowV2ConversationConversationStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationStage' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    lifecycle_state: Optional[GoogleCloudDialogflowV2ConversationLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleState' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone_number: Optional[googleclouddialogflowv2conversationphonenumber.GoogleCloudDialogflowV2ConversationPhoneNumber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
