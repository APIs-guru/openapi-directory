from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageSuggestions:
    r"""GoogleCloudDialogflowV2IntentMessageSuggestions
    The collection of suggestions.
    """
    
    suggestions: Optional[List[GoogleCloudDialogflowV2IntentMessageSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    
