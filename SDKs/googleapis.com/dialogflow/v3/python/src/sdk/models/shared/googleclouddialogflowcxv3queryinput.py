from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3audioinput
from . import googleclouddialogflowcxv3dtmfinput
from . import googleclouddialogflowcxv3eventinput
from . import googleclouddialogflowcxv3intentinput
from . import googleclouddialogflowcxv3textinput


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3QueryInput:
    audio: Optional[googleclouddialogflowcxv3audioinput.GoogleCloudDialogflowCxV3AudioInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    dtmf: Optional[googleclouddialogflowcxv3dtmfinput.GoogleCloudDialogflowCxV3DtmfInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dtmf' }})
    event: Optional[googleclouddialogflowcxv3eventinput.GoogleCloudDialogflowCxV3EventInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    intent: Optional[googleclouddialogflowcxv3intentinput.GoogleCloudDialogflowCxV3IntentInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    text: Optional[googleclouddialogflowcxv3textinput.GoogleCloudDialogflowCxV3TextInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
