from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3conversationturnuserinput
from . import googleclouddialogflowcxv3conversationturnvirtualagentoutput


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ConversationTurn:
    user_input: Optional[googleclouddialogflowcxv3conversationturnuserinput.GoogleCloudDialogflowCxV3ConversationTurnUserInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInput' }})
    virtual_agent_output: Optional[googleclouddialogflowcxv3conversationturnvirtualagentoutput.GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualAgentOutput' }})
    
