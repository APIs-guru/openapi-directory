from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1articleanswer


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestArticlesResponse:
    article_answers: Optional[List[googleclouddialogflowv2beta1articleanswer.GoogleCloudDialogflowV2beta1ArticleAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleAnswers' }})
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextSize' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    
