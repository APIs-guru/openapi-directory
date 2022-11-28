import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff } from "./googleclouddialogflowv2beta1responsemessageliveagenthandoff";
import { GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio } from "./googleclouddialogflowv2beta1responsemessagemixedaudio";
import { GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall } from "./googleclouddialogflowv2beta1responsemessagetelephonytransfercall";
import { GoogleCloudDialogflowV2beta1ResponseMessageText } from "./googleclouddialogflowv2beta1responsemessagetext";
/**
 * Response messages from an automated agent.
**/
export declare class GoogleCloudDialogflowV2beta1ResponseMessage extends SpeakeasyBase {
    endInteraction?: Map<string, any>;
    liveAgentHandoff?: GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff;
    mixedAudio?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio;
    payload?: Map<string, any>;
    telephonyTransferCall?: GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall;
    text?: GoogleCloudDialogflowV2beta1ResponseMessageText;
}
