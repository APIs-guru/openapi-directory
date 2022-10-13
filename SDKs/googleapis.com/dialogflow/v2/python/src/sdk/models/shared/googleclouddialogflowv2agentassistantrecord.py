from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2articleanswer
from . import googleclouddialogflowv2faqanswer


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AgentAssistantRecord:
    article_suggestion_answer: Optional[googleclouddialogflowv2articleanswer.GoogleCloudDialogflowV2ArticleAnswer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleSuggestionAnswer' }})
    faq_answer: Optional[googleclouddialogflowv2faqanswer.GoogleCloudDialogflowV2FaqAnswer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faqAnswer' }})
    
