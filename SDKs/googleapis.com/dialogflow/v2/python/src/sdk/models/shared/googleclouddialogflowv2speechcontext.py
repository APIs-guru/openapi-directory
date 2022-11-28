from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SpeechContext:
    r"""GoogleCloudDialogflowV2SpeechContext
    Hints for the speech recognizer to help with recognition in a specific conversation state.
    """
    
    boost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boost') }})
    phrases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phrases') }})
    
