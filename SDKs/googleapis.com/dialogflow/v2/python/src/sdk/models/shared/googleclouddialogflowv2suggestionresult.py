from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SuggestionResult:
    r"""GoogleCloudDialogflowV2SuggestionResult
    One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
    """
    
    error: Optional[GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    suggest_articles_response: Optional[GoogleCloudDialogflowV2SuggestArticlesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestArticlesResponse') }})
    suggest_faq_answers_response: Optional[GoogleCloudDialogflowV2SuggestFaqAnswersResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestFaqAnswersResponse') }})
    suggest_smart_replies_response: Optional[GoogleCloudDialogflowV2SuggestSmartRepliesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestSmartRepliesResponse') }})
    
