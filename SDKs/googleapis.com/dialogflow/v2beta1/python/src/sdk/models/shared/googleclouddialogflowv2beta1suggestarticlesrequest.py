from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestArticlesRequest:
    r"""GoogleCloudDialogflowV2beta1SuggestArticlesRequest
    The request message for Participants.SuggestArticles.
    """
    
    assist_query_params: Optional[GoogleCloudDialogflowV2beta1AssistQueryParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assistQueryParams') }})
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextSize') }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestMessage') }})
    
