from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum(str, Enum):
    AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
    PARTIAL = "PARTIAL"
    FINAL = "FINAL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AutomatedAgentReply:
    r"""GoogleCloudDialogflowV2beta1AutomatedAgentReply
    Represents a response from an automated agent.
    """
    
    allow_cancellation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowCancellation') }})
    automated_agent_reply_type: Optional[GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatedAgentReplyType') }})
    cx_current_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cxCurrentPage') }})
    cx_session_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cxSessionParameters') }})
    detect_intent_response: Optional[GoogleCloudDialogflowV2beta1DetectIntentResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectIntentResponse') }})
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    match_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchConfidence') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    response_messages: Optional[List[GoogleCloudDialogflowV2beta1ResponseMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseMessages') }})
    
