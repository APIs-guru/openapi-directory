import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess } from "./googleclouddialogflowcxv3responsemessageconversationsuccess";
import { GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff } from "./googleclouddialogflowcxv3responsemessageliveagenthandoff";
import { GoogleCloudDialogflowCxV3ResponseMessageMixedAudio } from "./googleclouddialogflowcxv3responsemessagemixedaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText } from "./googleclouddialogflowcxv3responsemessageoutputaudiotext";
import { GoogleCloudDialogflowCxV3ResponseMessagePlayAudio } from "./googleclouddialogflowcxv3responsemessageplayaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall } from "./googleclouddialogflowcxv3responsemessagetelephonytransfercall";
import { GoogleCloudDialogflowCxV3ResponseMessageText } from "./googleclouddialogflowcxv3responsemessagetext";
import { GoogleCloudDialogflowCxV3ResponseMessageMixedAudioInput } from "./googleclouddialogflowcxv3responsemessagemixedaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput } from "./googleclouddialogflowcxv3responsemessageoutputaudiotext";
import { GoogleCloudDialogflowCxV3ResponseMessagePlayAudioInput } from "./googleclouddialogflowcxv3responsemessageplayaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageTextInput } from "./googleclouddialogflowcxv3responsemessagetext";
/**
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
export declare class GoogleCloudDialogflowCxV3ResponseMessage extends SpeakeasyBase {
    conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;
    endInteraction?: Map<string, any>;
    liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;
    mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;
    outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;
    payload?: Map<string, any>;
    playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;
    telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;
    text?: GoogleCloudDialogflowCxV3ResponseMessageText;
}
/**
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
export declare class GoogleCloudDialogflowCxV3ResponseMessageInput extends SpeakeasyBase {
    conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;
    endInteraction?: Map<string, any>;
    liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;
    mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudioInput;
    outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput;
    payload?: Map<string, any>;
    playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudioInput;
    telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;
    text?: GoogleCloudDialogflowCxV3ResponseMessageTextInput;
}
