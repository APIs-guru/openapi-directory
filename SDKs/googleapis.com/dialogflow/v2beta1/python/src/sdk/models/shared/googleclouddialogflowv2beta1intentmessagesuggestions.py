from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageSuggestions:
    r"""GoogleCloudDialogflowV2beta1IntentMessageSuggestions
    The collection of suggestions.
    """
    
    suggestions: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    
