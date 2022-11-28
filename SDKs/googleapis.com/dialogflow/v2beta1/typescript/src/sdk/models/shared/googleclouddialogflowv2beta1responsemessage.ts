import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff } from "./googleclouddialogflowv2beta1responsemessageliveagenthandoff";
import { GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio } from "./googleclouddialogflowv2beta1responsemessagemixedaudio";
import { GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall } from "./googleclouddialogflowv2beta1responsemessagetelephonytransfercall";
import { GoogleCloudDialogflowV2beta1ResponseMessageText } from "./googleclouddialogflowv2beta1responsemessagetext";



// GoogleCloudDialogflowV2beta1ResponseMessage
/** 
 * Response messages from an automated agent.
**/
export class GoogleCloudDialogflowV2beta1ResponseMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endInteraction" })
  endInteraction?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" })
  liveAgentHandoff?: GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff;

  @SpeakeasyMetadata({ data: "json, name=mixedAudio" })
  mixedAudio?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=telephonyTransferCall" })
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowV2beta1ResponseMessageText;
}
