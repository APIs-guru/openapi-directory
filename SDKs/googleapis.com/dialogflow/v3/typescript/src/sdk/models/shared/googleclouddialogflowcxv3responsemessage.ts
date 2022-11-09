import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess } from "./googleclouddialogflowcxv3responsemessageconversationsuccess";
import { GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff } from "./googleclouddialogflowcxv3responsemessageliveagenthandoff";
import { GoogleCloudDialogflowCxV3ResponseMessageMixedAudio } from "./googleclouddialogflowcxv3responsemessagemixedaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText } from "./googleclouddialogflowcxv3responsemessageoutputaudiotext";
import { GoogleCloudDialogflowCxV3ResponseMessagePlayAudio } from "./googleclouddialogflowcxv3responsemessageplayaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall } from "./googleclouddialogflowcxv3responsemessagetelephonytransfercall";
import { GoogleCloudDialogflowCxV3ResponseMessageText } from "./googleclouddialogflowcxv3responsemessagetext";


// GoogleCloudDialogflowCxV3ResponseMessage
/** 
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
export class GoogleCloudDialogflowCxV3ResponseMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationSuccess" })
  conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;

  @Metadata({ data: "json, name=endInteraction" })
  endInteraction?: Map<string, any>;

  @Metadata({ data: "json, name=liveAgentHandoff" })
  liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;

  @Metadata({ data: "json, name=mixedAudio" })
  mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;

  @Metadata({ data: "json, name=outputAudioText" })
  outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;

  @Metadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @Metadata({ data: "json, name=playAudio" })
  playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;

  @Metadata({ data: "json, name=telephonyTransferCall" })
  telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;

  @Metadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowCxV3ResponseMessageText;
}
