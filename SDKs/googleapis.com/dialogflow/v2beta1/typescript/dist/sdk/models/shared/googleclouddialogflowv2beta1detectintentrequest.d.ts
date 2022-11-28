import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleCloudDialogflowV2beta1QueryInput } from "./googleclouddialogflowv2beta1queryinput";
import { GoogleCloudDialogflowV2beta1QueryParameters } from "./googleclouddialogflowv2beta1queryparameters";
/**
 * The request to detect user's intent.
**/
export declare class GoogleCloudDialogflowV2beta1DetectIntentRequest extends SpeakeasyBase {
    inputAudio?: string;
    outputAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
    outputAudioConfigMask?: string;
    queryInput?: GoogleCloudDialogflowV2beta1QueryInput;
    queryParams?: GoogleCloudDialogflowV2beta1QueryParameters;
}
