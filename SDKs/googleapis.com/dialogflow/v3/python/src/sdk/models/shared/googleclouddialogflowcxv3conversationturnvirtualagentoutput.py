from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput:
    r"""GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput
    The output from the virtual agent.
    """
    
    current_page: Optional[GoogleCloudDialogflowCxV3Page] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    diagnostic_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosticInfo') }})
    differences: Optional[List[GoogleCloudDialogflowCxV3TestRunDifference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('differences') }})
    session_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionParameters') }})
    status: Optional[GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    text_responses: Optional[List[GoogleCloudDialogflowCxV3ResponseMessageText]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textResponses') }})
    triggered_intent: Optional[GoogleCloudDialogflowCxV3Intent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggeredIntent') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput:
    r"""GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput
    The output from the virtual agent.
    """
    
    current_page: Optional[GoogleCloudDialogflowCxV3PageInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    diagnostic_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosticInfo') }})
    session_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionParameters') }})
    status: Optional[GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    text_responses: Optional[List[GoogleCloudDialogflowCxV3ResponseMessageTextInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textResponses') }})
    triggered_intent: Optional[GoogleCloudDialogflowCxV3Intent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggeredIntent') }})
    
