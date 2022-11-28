from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AgentAssistantRecord:
    r"""GoogleCloudDialogflowV2AgentAssistantRecord
    Represents a record of a human agent assist answer.
    """
    
    article_suggestion_answer: Optional[GoogleCloudDialogflowV2ArticleAnswer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleSuggestionAnswer') }})
    faq_answer: Optional[GoogleCloudDialogflowV2FaqAnswer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faqAnswer') }})
    
