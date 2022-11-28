import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2QueryInput } from "./googleclouddialogflowv2queryinput";
import { GoogleCloudDialogflowV2QueryParameters } from "./googleclouddialogflowv2queryparameters";
/**
 * The request to detect user's intent.
**/
export declare class GoogleCloudDialogflowV2DetectIntentRequest extends SpeakeasyBase {
    inputAudio?: string;
    outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
    outputAudioConfigMask?: string;
    queryInput?: GoogleCloudDialogflowV2QueryInput;
    queryParams?: GoogleCloudDialogflowV2QueryParameters;
}
