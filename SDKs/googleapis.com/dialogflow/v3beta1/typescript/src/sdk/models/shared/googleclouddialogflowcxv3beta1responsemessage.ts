import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// GoogleCloudDialogflowCxV3beta1ResponseMessage
/** 
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationSuccess" })
  conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;

  @SpeakeasyMetadata({ data: "json, name=endInteraction" })
  endInteraction?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" })
  liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;

  @SpeakeasyMetadata({ data: "json, name=mixedAudio" })
  mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;

  @SpeakeasyMetadata({ data: "json, name=outputAudioText" })
  outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=playAudio" })
  playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;

  @SpeakeasyMetadata({ data: "json, name=telephonyTransferCall" })
  telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText;
}


// GoogleCloudDialogflowCxV3beta1ResponseMessageInput
/** 
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationSuccess" })
  conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;

  @SpeakeasyMetadata({ data: "json, name=endInteraction" })
  endInteraction?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" })
  liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;

  @SpeakeasyMetadata({ data: "json, name=mixedAudio" })
  mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput;

  @SpeakeasyMetadata({ data: "json, name=outputAudioText" })
  outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=playAudio" })
  playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput;

  @SpeakeasyMetadata({ data: "json, name=telephonyTransferCall" })
  telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput;
}
