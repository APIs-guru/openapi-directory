from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1responsemessageconversationsuccess
from . import googleclouddialogflowcxv3beta1responsemessageliveagenthandoff
from . import googleclouddialogflowcxv3beta1responsemessagemixedaudio
from . import googleclouddialogflowcxv3beta1responsemessageoutputaudiotext
from . import googleclouddialogflowcxv3beta1responsemessageplayaudio
from . import googleclouddialogflowcxv3beta1responsemessagetelephonytransfercall
from . import googleclouddialogflowcxv3beta1responsemessagetext


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessage:
    conversation_success: Optional[googleclouddialogflowcxv3beta1responsemessageconversationsuccess.GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationSuccess' }})
    end_interaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endInteraction' }})
    live_agent_handoff: Optional[googleclouddialogflowcxv3beta1responsemessageliveagenthandoff.GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveAgentHandoff' }})
    mixed_audio: Optional[googleclouddialogflowcxv3beta1responsemessagemixedaudio.GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mixedAudio' }})
    output_audio_text: Optional[googleclouddialogflowcxv3beta1responsemessageoutputaudiotext.GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioText' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    play_audio: Optional[googleclouddialogflowcxv3beta1responsemessageplayaudio.GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playAudio' }})
    telephony_transfer_call: Optional[googleclouddialogflowcxv3beta1responsemessagetelephonytransfercall.GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telephonyTransferCall' }})
    text: Optional[googleclouddialogflowcxv3beta1responsemessagetext.GoogleCloudDialogflowCxV3beta1ResponseMessageText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
