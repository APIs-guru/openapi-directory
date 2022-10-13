from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlerpcstatus
from . import googleclouddialogflowv2suggestarticlesresponse
from . import googleclouddialogflowv2suggestfaqanswersresponse
from . import googleclouddialogflowv2suggestsmartrepliesresponse


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SuggestionResult:
    error: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    suggest_articles_response: Optional[googleclouddialogflowv2suggestarticlesresponse.GoogleCloudDialogflowV2SuggestArticlesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestArticlesResponse' }})
    suggest_faq_answers_response: Optional[googleclouddialogflowv2suggestfaqanswersresponse.GoogleCloudDialogflowV2SuggestFaqAnswersResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestFaqAnswersResponse' }})
    suggest_smart_replies_response: Optional[googleclouddialogflowv2suggestsmartrepliesresponse.GoogleCloudDialogflowV2SuggestSmartRepliesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestSmartRepliesResponse' }})
    
