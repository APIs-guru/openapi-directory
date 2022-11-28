import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess } from "./googleclouddialogflowcxv3beta1responsemessageconversationsuccess";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff } from "./googleclouddialogflowcxv3beta1responsemessageliveagenthandoff";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio } from "./googleclouddialogflowcxv3beta1responsemessagemixedaudio";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText } from "./googleclouddialogflowcxv3beta1responsemessageoutputaudiotext";
import { GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio } from "./googleclouddialogflowcxv3beta1responsemessageplayaudio";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall } from "./googleclouddialogflowcxv3beta1responsemessagetelephonytransfercall";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageText } from "./googleclouddialogflowcxv3beta1responsemessagetext";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput } from "./googleclouddialogflowcxv3beta1responsemessagemixedaudio";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput } from "./googleclouddialogflowcxv3beta1responsemessageoutputaudiotext";
import { GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput } from "./googleclouddialogflowcxv3beta1responsemessageplayaudio";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput } from "./googleclouddialogflowcxv3beta1responsemessagetext";
/**
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessage extends SpeakeasyBase {
    conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
    endInteraction?: Map<string, any>;
    liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
    mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;
    outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;
    payload?: Map<string, any>;
    playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;
    telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
    text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText;
}
/**
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
export declare class GoogleCloudDialogflowCxV3beta1ResponseMessageInput extends SpeakeasyBase {
    conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
    endInteraction?: Map<string, any>;
    liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
    mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput;
    outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput;
    payload?: Map<string, any>;
    playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput;
    telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;
    text?: GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput;
}
