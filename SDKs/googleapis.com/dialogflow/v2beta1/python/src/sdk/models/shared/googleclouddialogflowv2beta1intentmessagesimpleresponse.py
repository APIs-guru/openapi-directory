from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse:
    display_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayText' }})
    ssml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssml' }})
    text_to_speech: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textToSpeech' }})
    
