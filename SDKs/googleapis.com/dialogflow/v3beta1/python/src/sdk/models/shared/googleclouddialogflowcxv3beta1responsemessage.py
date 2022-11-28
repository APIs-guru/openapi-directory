from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessageInput:
    r"""GoogleCloudDialogflowCxV3beta1ResponseMessageInput
    Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
    """
    
    conversation_success: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationSuccess') }})
    end_interaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endInteraction') }})
    live_agent_handoff: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveAgentHandoff') }})
    mixed_audio: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mixedAudio') }})
    output_audio_text: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioText') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    play_audio: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playAudio') }})
    telephony_transfer_call: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephonyTransferCall') }})
    text: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessage:
    r"""GoogleCloudDialogflowCxV3beta1ResponseMessage
    Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
    """
    
    conversation_success: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationSuccess') }})
    end_interaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endInteraction') }})
    live_agent_handoff: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveAgentHandoff') }})
    mixed_audio: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mixedAudio') }})
    output_audio_text: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioText') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    play_audio: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playAudio') }})
    telephony_transfer_call: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephonyTransferCall') }})
    text: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
