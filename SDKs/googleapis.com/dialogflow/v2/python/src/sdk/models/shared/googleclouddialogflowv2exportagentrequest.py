from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ExportAgentRequest:
    r"""GoogleCloudDialogflowV2ExportAgentRequest
    The request message for Agents.ExportAgent.
    """
    
    agent_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentUri') }})
    
