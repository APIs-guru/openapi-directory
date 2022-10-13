from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2detectintentresponse

class GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum(str, Enum):
    AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
    PARTIAL = "PARTIAL"
    FINAL = "FINAL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AutomatedAgentReply:
    allow_cancellation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCancellation' }})
    automated_agent_reply_type: Optional[GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatedAgentReplyType' }})
    detect_intent_response: Optional[googleclouddialogflowv2detectintentresponse.GoogleCloudDialogflowV2DetectIntentResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectIntentResponse' }})
    
