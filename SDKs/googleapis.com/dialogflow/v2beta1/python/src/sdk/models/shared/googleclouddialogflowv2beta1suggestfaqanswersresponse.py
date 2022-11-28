from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse:
    r"""GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse
    The request message for Participants.SuggestFaqAnswers.
    """
    
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextSize') }})
    faq_answers: Optional[List[GoogleCloudDialogflowV2beta1FaqAnswer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faqAnswers') }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestMessage') }})
    
