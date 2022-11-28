from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmText:
    r"""GoogleCloudDialogflowV2beta1IntentMessageRbmText
    Rich Business Messaging (RBM) text response with suggestions.
    """
    
    rbm_suggestion: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rbmSuggestion') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
