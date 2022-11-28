from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1CompileSuggestionResponse:
    r"""GoogleCloudDialogflowV2beta1CompileSuggestionResponse
    The response message for Participants.CompileSuggestion.
    """
    
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextSize') }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestMessage') }})
    suggestion: Optional[GoogleCloudDialogflowV2beta1Suggestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestion') }})
    
