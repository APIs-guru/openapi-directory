from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ConversationTurnInput:
    r"""GoogleCloudDialogflowCxV3beta1ConversationTurnInput
    One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
    """
    
    user_input: Optional[GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInput') }})
    virtual_agent_output: Optional[GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualAgentOutput') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ConversationTurn:
    r"""GoogleCloudDialogflowCxV3beta1ConversationTurn
    One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
    """
    
    user_input: Optional[GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInput') }})
    virtual_agent_output: Optional[GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualAgentOutput') }})
    
