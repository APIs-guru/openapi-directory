from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ResponseMessage:
    r"""GoogleCloudDialogflowCxV3ResponseMessage
    Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
    """
    
    conversation_success: Optional[GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationSuccess') }})
    end_interaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endInteraction') }})
    live_agent_handoff: Optional[GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveAgentHandoff') }})
    mixed_audio: Optional[GoogleCloudDialogflowCxV3ResponseMessageMixedAudio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mixedAudio') }})
    output_audio_text: Optional[GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioText') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    play_audio: Optional[GoogleCloudDialogflowCxV3ResponseMessagePlayAudio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playAudio') }})
    telephony_transfer_call: Optional[GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephonyTransferCall') }})
    text: Optional[GoogleCloudDialogflowCxV3ResponseMessageText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ResponseMessageInput:
    r"""GoogleCloudDialogflowCxV3ResponseMessageInput
    Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
    """
    
    conversation_success: Optional[GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationSuccess') }})
    end_interaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endInteraction') }})
    live_agent_handoff: Optional[GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveAgentHandoff') }})
    mixed_audio: Optional[GoogleCloudDialogflowCxV3ResponseMessageMixedAudioInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mixedAudio') }})
    output_audio_text: Optional[GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioText') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    play_audio: Optional[GoogleCloudDialogflowCxV3ResponseMessagePlayAudioInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playAudio') }})
    telephony_transfer_call: Optional[GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephonyTransferCall') }})
    text: Optional[GoogleCloudDialogflowCxV3ResponseMessageTextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
