from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AgentAssistantRecord:
    r"""GoogleCloudDialogflowV2beta1AgentAssistantRecord
    Represents a record of a human agent assistant answer.
    """
    
    article_suggestion_answer: Optional[GoogleCloudDialogflowV2beta1ArticleAnswer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleSuggestionAnswer') }})
    faq_answer: Optional[GoogleCloudDialogflowV2beta1FaqAnswer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faqAnswer') }})
    
