import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2QueryResult } from "./googleclouddialogflowv2queryresult";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * The message returned from the DetectIntent method.
**/
export declare class GoogleCloudDialogflowV2DetectIntentResponse extends SpeakeasyBase {
    outputAudio?: string;
    outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
    queryResult?: GoogleCloudDialogflowV2QueryResult;
    responseId?: string;
    webhookStatus?: GoogleRpcStatus;
}
