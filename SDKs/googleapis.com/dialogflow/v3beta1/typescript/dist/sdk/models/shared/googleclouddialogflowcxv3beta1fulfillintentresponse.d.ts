import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryResult } from "./googleclouddialogflowcxv3beta1queryresult";
/**
 * Response of FulfillIntent
**/
export declare class GoogleCloudDialogflowCxV3beta1FulfillIntentResponse extends SpeakeasyBase {
    outputAudio?: string;
    outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
    queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;
    responseId?: string;
}
