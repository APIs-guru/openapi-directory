from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1queryinput


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput:
    enable_sentiment_analysis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSentimentAnalysis' }})
    injected_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'injectedParameters' }})
    input: Optional[googleclouddialogflowcxv3beta1queryinput.GoogleCloudDialogflowCxV3beta1QueryInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    is_webhook_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isWebhookEnabled' }})
    
