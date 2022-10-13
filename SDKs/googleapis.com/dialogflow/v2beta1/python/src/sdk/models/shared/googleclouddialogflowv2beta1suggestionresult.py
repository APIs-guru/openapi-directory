from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlerpcstatus
from . import googleclouddialogflowv2beta1suggestarticlesresponse
from . import googleclouddialogflowv2beta1suggestfaqanswersresponse
from . import googleclouddialogflowv2beta1suggestsmartrepliesresponse


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestionResult:
    error: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    suggest_articles_response: Optional[googleclouddialogflowv2beta1suggestarticlesresponse.GoogleCloudDialogflowV2beta1SuggestArticlesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestArticlesResponse' }})
    suggest_faq_answers_response: Optional[googleclouddialogflowv2beta1suggestfaqanswersresponse.GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestFaqAnswersResponse' }})
    suggest_smart_replies_response: Optional[googleclouddialogflowv2beta1suggestsmartrepliesresponse.GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestSmartRepliesResponse' }})
    
