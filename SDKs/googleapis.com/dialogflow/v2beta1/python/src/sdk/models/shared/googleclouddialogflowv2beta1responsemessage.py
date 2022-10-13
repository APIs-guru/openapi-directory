from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1responsemessageliveagenthandoff
from . import googleclouddialogflowv2beta1responsemessagemixedaudio
from . import googleclouddialogflowv2beta1responsemessagetelephonytransfercall
from . import googleclouddialogflowv2beta1responsemessagetext


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ResponseMessage:
    end_interaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endInteraction' }})
    live_agent_handoff: Optional[googleclouddialogflowv2beta1responsemessageliveagenthandoff.GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveAgentHandoff' }})
    mixed_audio: Optional[googleclouddialogflowv2beta1responsemessagemixedaudio.GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mixedAudio' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    telephony_transfer_call: Optional[googleclouddialogflowv2beta1responsemessagetelephonytransfercall.GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telephonyTransferCall' }})
    text: Optional[googleclouddialogflowv2beta1responsemessagetext.GoogleCloudDialogflowV2beta1ResponseMessageText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
