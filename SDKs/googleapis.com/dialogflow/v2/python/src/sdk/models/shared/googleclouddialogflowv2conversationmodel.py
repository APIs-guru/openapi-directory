from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2ConversationModelStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    UNDEPLOYED = "UNDEPLOYED"
    DEPLOYING = "DEPLOYING"
    DEPLOYED = "DEPLOYED"
    UNDEPLOYING = "UNDEPLOYING"
    DELETING = "DELETING"
    FAILED = "FAILED"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationModel:
    r"""GoogleCloudDialogflowV2ConversationModel
    Represents a conversation model.
    """
    
    article_suggestion_model_metadata: Optional[GoogleCloudDialogflowV2ArticleSuggestionModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleSuggestionModelMetadata') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    datasets: Optional[List[GoogleCloudDialogflowV2InputDataset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasets') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    smart_reply_model_metadata: Optional[GoogleCloudDialogflowV2SmartReplyModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartReplyModelMetadata') }})
    state: Optional[GoogleCloudDialogflowV2ConversationModelStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationModelInput:
    r"""GoogleCloudDialogflowV2ConversationModelInput
    Represents a conversation model.
    """
    
    article_suggestion_model_metadata: Optional[GoogleCloudDialogflowV2ArticleSuggestionModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleSuggestionModelMetadata') }})
    datasets: Optional[List[GoogleCloudDialogflowV2InputDataset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasets') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    smart_reply_model_metadata: Optional[GoogleCloudDialogflowV2SmartReplyModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartReplyModelMetadata') }})
    
