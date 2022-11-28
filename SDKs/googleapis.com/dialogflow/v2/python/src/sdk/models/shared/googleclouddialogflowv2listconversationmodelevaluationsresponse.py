from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse:
    r"""GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse
    The response message for ConversationModels.ListConversationModelEvaluations
    """
    
    conversation_model_evaluations: Optional[List[GoogleCloudDialogflowV2ConversationModelEvaluation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationModelEvaluations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
