from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2faqanswer


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SuggestFaqAnswersResponse:
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextSize' }})
    faq_answers: Optional[List[googleclouddialogflowv2faqanswer.GoogleCloudDialogflowV2FaqAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faqAnswers' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    
