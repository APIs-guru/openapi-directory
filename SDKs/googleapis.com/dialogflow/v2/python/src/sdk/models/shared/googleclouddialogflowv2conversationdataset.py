from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationDatasetInput:
    r"""GoogleCloudDialogflowV2ConversationDatasetInput
    Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
    """
    
    conversation_info: Optional[GoogleCloudDialogflowV2ConversationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationInfo') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    input_config: Optional[GoogleCloudDialogflowV2InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationDataset:
    r"""GoogleCloudDialogflowV2ConversationDataset
    Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
    """
    
    conversation_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationCount') }})
    conversation_info: Optional[GoogleCloudDialogflowV2ConversationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationInfo') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    input_config: Optional[GoogleCloudDialogflowV2InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
