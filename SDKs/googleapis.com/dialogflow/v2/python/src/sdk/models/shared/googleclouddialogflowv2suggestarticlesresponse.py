from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2articleanswer


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SuggestArticlesResponse:
    article_answers: Optional[List[googleclouddialogflowv2articleanswer.GoogleCloudDialogflowV2ArticleAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleAnswers' }})
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextSize' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    
