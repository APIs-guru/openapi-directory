import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryResult } from "./googleclouddialogflowcxv3queryresult";
/**
 * Response of FulfillIntent
**/
export declare class GoogleCloudDialogflowCxV3FulfillIntentResponse extends SpeakeasyBase {
    outputAudio?: string;
    outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
    queryResult?: GoogleCloudDialogflowCxV3QueryResult;
    responseId?: string;
}
