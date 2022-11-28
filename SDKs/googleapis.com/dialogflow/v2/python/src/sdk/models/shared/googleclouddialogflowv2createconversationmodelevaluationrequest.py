from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput:
    r"""GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput
    The request message for ConversationModels.CreateConversationModelEvaluation
    """
    
    conversation_model_evaluation: Optional[GoogleCloudDialogflowV2ConversationModelEvaluationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationModelEvaluation') }})
    
