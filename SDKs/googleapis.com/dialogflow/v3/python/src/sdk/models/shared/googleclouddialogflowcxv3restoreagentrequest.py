from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum(str, Enum):
    RESTORE_OPTION_UNSPECIFIED = "RESTORE_OPTION_UNSPECIFIED"
    KEEP = "KEEP"
    FALLBACK = "FALLBACK"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3RestoreAgentRequest:
    r"""GoogleCloudDialogflowCxV3RestoreAgentRequest
    The request message for Agents.RestoreAgent.
    """
    
    agent_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentContent') }})
    agent_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentUri') }})
    restore_option: Optional[GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreOption') }})
    
