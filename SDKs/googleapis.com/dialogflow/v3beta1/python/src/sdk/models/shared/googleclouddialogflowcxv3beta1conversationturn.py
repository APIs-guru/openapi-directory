from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1conversationturnuserinput
from . import googleclouddialogflowcxv3beta1conversationturnvirtualagentoutput


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ConversationTurn:
    user_input: Optional[googleclouddialogflowcxv3beta1conversationturnuserinput.GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInput' }})
    virtual_agent_output: Optional[googleclouddialogflowcxv3beta1conversationturnvirtualagentoutput.GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualAgentOutput' }})
    
