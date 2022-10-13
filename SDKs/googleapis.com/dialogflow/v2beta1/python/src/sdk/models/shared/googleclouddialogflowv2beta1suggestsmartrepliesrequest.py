from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1textinput


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest:
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextSize' }})
    current_text_input: Optional[googleclouddialogflowv2beta1textinput.GoogleCloudDialogflowV2beta1TextInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentTextInput' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    
