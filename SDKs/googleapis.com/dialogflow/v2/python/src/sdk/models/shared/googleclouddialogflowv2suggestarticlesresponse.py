from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SuggestArticlesResponse:
    r"""GoogleCloudDialogflowV2SuggestArticlesResponse
    The response message for Participants.SuggestArticles.
    """
    
    article_answers: Optional[List[GoogleCloudDialogflowV2ArticleAnswer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleAnswers') }})
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextSize') }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestMessage') }})
    
