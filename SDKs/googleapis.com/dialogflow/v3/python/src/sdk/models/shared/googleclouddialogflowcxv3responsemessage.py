from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3responsemessageconversationsuccess
from . import googleclouddialogflowcxv3responsemessageliveagenthandoff
from . import googleclouddialogflowcxv3responsemessagemixedaudio
from . import googleclouddialogflowcxv3responsemessageoutputaudiotext
from . import googleclouddialogflowcxv3responsemessageplayaudio
from . import googleclouddialogflowcxv3responsemessagetelephonytransfercall
from . import googleclouddialogflowcxv3responsemessagetext


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ResponseMessage:
    conversation_success: Optional[googleclouddialogflowcxv3responsemessageconversationsuccess.GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationSuccess' }})
    end_interaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endInteraction' }})
    live_agent_handoff: Optional[googleclouddialogflowcxv3responsemessageliveagenthandoff.GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveAgentHandoff' }})
    mixed_audio: Optional[googleclouddialogflowcxv3responsemessagemixedaudio.GoogleCloudDialogflowCxV3ResponseMessageMixedAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mixedAudio' }})
    output_audio_text: Optional[googleclouddialogflowcxv3responsemessageoutputaudiotext.GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioText' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    play_audio: Optional[googleclouddialogflowcxv3responsemessageplayaudio.GoogleCloudDialogflowCxV3ResponseMessagePlayAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playAudio' }})
    telephony_transfer_call: Optional[googleclouddialogflowcxv3responsemessagetelephonytransfercall.GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telephonyTransferCall' }})
    text: Optional[googleclouddialogflowcxv3responsemessagetext.GoogleCloudDialogflowCxV3ResponseMessageText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
