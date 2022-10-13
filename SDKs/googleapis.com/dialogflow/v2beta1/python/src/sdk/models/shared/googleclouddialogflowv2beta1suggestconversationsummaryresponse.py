from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1suggestconversationsummaryresponsesummary


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse:
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextSize' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    summary: Optional[googleclouddialogflowv2beta1suggestconversationsummaryresponsesummary.GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
