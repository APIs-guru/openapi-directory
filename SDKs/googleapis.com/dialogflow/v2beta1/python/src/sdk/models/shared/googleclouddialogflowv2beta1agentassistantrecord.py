from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1articleanswer
from . import googleclouddialogflowv2beta1faqanswer


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AgentAssistantRecord:
    article_suggestion_answer: Optional[googleclouddialogflowv2beta1articleanswer.GoogleCloudDialogflowV2beta1ArticleAnswer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleSuggestionAnswer' }})
    faq_answer: Optional[googleclouddialogflowv2beta1faqanswer.GoogleCloudDialogflowV2beta1FaqAnswer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faqAnswer' }})
    
