from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ConversationTurn:
    r"""GoogleCloudDialogflowCxV3ConversationTurn
    One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
    """
    
    user_input: Optional[GoogleCloudDialogflowCxV3ConversationTurnUserInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInput') }})
    virtual_agent_output: Optional[GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualAgentOutput') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ConversationTurnInput:
    r"""GoogleCloudDialogflowCxV3ConversationTurnInput
    One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
    """
    
    user_input: Optional[GoogleCloudDialogflowCxV3ConversationTurnUserInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInput') }})
    virtual_agent_output: Optional[GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualAgentOutput') }})
    
