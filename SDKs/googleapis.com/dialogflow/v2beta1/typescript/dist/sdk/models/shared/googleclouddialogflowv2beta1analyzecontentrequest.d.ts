import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AssistQueryParameters } from "./googleclouddialogflowv2beta1assistqueryparameters";
import { GoogleCloudDialogflowV2beta1AudioInput } from "./googleclouddialogflowv2beta1audioinput";
import { GoogleCloudDialogflowV2beta1EventInput } from "./googleclouddialogflowv2beta1eventinput";
import { GoogleCloudDialogflowV2beta1QueryParameters } from "./googleclouddialogflowv2beta1queryparameters";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleCloudDialogflowV2beta1TextInput } from "./googleclouddialogflowv2beta1textinput";
/**
 * The request message for Participants.AnalyzeContent.
**/
export declare class GoogleCloudDialogflowV2beta1AnalyzeContentRequest extends SpeakeasyBase {
    assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;
    audioInput?: GoogleCloudDialogflowV2beta1AudioInput;
    cxCurrentPage?: string;
    cxParameters?: Map<string, any>;
    eventInput?: GoogleCloudDialogflowV2beta1EventInput;
    messageSendTime?: string;
    queryParams?: GoogleCloudDialogflowV2beta1QueryParameters;
    replyAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
    requestId?: string;
    textInput?: GoogleCloudDialogflowV2beta1TextInput;
}
