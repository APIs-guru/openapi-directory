import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";
import { GoogleCloudDialogflowCxV3QueryParameters } from "./googleclouddialogflowcxv3queryparameters";
/**
 * The request to detect user's intent.
**/
export declare class GoogleCloudDialogflowCxV3DetectIntentRequest extends SpeakeasyBase {
    outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
    queryInput?: GoogleCloudDialogflowCxV3QueryInput;
    queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
}
