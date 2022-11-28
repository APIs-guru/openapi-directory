from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Suggestion:
    r"""GoogleCloudDialogflowV2beta1Suggestion
    Represents a suggestion for a human agent.
    """
    
    articles: Optional[List[GoogleCloudDialogflowV2beta1SuggestionArticle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articles') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    faq_answers: Optional[List[GoogleCloudDialogflowV2beta1SuggestionFaqAnswer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faqAnswers') }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestMessage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
