from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListSuggestionsResponse:
    r"""GoogleCloudDialogflowV2beta1ListSuggestionsResponse
    The response message for Participants.ListSuggestions.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    suggestions: Optional[List[GoogleCloudDialogflowV2beta1Suggestion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    
