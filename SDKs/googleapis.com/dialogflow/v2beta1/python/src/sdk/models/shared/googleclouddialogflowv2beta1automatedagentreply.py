from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1detectintentresponse
from . import googleclouddialogflowv2beta1responsemessage

class GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum(str, Enum):
    AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
    PARTIAL = "PARTIAL"
    FINAL = "FINAL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AutomatedAgentReply:
    allow_cancellation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCancellation' }})
    automated_agent_reply_type: Optional[GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatedAgentReplyType' }})
    cx_session_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cxSessionParameters' }})
    detect_intent_response: Optional[googleclouddialogflowv2beta1detectintentresponse.GoogleCloudDialogflowV2beta1DetectIntentResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectIntentResponse' }})
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    match_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchConfidence' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    response_messages: Optional[List[googleclouddialogflowv2beta1responsemessage.GoogleCloudDialogflowV2beta1ResponseMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseMessages' }})
    
