import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";
import { GoogleCloudDialogflowCxV3beta1QueryParameters } from "./googleclouddialogflowcxv3beta1queryparameters";
/**
 * The request to detect user's intent.
**/
export declare class GoogleCloudDialogflowCxV3beta1DetectIntentRequest extends SpeakeasyBase {
    outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
    queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;
    queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
}
