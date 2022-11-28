from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum(str, Enum):
    AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED"
    PARTIAL = "PARTIAL"
    FINAL = "FINAL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AutomatedAgentReply:
    r"""GoogleCloudDialogflowV2AutomatedAgentReply
    Represents a response from an automated agent.
    """
    
    allow_cancellation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowCancellation') }})
    automated_agent_reply_type: Optional[GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatedAgentReplyType') }})
    cx_current_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cxCurrentPage') }})
    detect_intent_response: Optional[GoogleCloudDialogflowV2DetectIntentResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectIntentResponse') }})
    
