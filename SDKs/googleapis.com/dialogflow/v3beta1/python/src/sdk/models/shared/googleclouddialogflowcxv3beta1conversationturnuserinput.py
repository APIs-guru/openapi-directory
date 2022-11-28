from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput:
    r"""GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput
    The input from the human user.
    """
    
    enable_sentiment_analysis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSentimentAnalysis') }})
    injected_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('injectedParameters') }})
    input: Optional[GoogleCloudDialogflowCxV3beta1QueryInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    is_webhook_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isWebhookEnabled') }})
    
