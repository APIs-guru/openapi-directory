from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1suggestionarticle
from . import googleclouddialogflowv2beta1suggestionfaqanswer


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Suggestion:
    articles: Optional[List[googleclouddialogflowv2beta1suggestionarticle.GoogleCloudDialogflowV2beta1SuggestionArticle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articles' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    faq_answers: Optional[List[googleclouddialogflowv2beta1suggestionfaqanswer.GoogleCloudDialogflowV2beta1SuggestionFaqAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faqAnswers' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
