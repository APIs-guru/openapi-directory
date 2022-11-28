from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageSimpleResponse:
    r"""GoogleCloudDialogflowV2IntentMessageSimpleResponse
    The simple response message containing speech or text.
    """
    
    display_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayText') }})
    ssml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssml') }})
    text_to_speech: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textToSpeech') }})
    
