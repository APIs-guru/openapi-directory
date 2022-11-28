from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1RestoreAgentRequest:
    r"""GoogleCloudDialogflowV2beta1RestoreAgentRequest
    The request message for Agents.RestoreAgent.
    """
    
    agent_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentContent') }})
    agent_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentUri') }})
    
