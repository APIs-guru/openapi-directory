from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1audioinput
from . import googleclouddialogflowcxv3beta1dtmfinput
from . import googleclouddialogflowcxv3beta1eventinput
from . import googleclouddialogflowcxv3beta1intentinput
from . import googleclouddialogflowcxv3beta1textinput


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1QueryInput:
    audio: Optional[googleclouddialogflowcxv3beta1audioinput.GoogleCloudDialogflowCxV3beta1AudioInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    dtmf: Optional[googleclouddialogflowcxv3beta1dtmfinput.GoogleCloudDialogflowCxV3beta1DtmfInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dtmf' }})
    event: Optional[googleclouddialogflowcxv3beta1eventinput.GoogleCloudDialogflowCxV3beta1EventInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    intent: Optional[googleclouddialogflowcxv3beta1intentinput.GoogleCloudDialogflowCxV3beta1IntentInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    text: Optional[googleclouddialogflowcxv3beta1textinput.GoogleCloudDialogflowCxV3beta1TextInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
