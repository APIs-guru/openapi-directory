import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1QueryResult } from "./googleclouddialogflowv2beta1queryresult";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * The message returned from the DetectIntent method.
**/
export declare class GoogleCloudDialogflowV2beta1DetectIntentResponse extends SpeakeasyBase {
    alternativeQueryResults?: GoogleCloudDialogflowV2beta1QueryResult[];
    outputAudio?: string;
    outputAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
    queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
    responseId?: string;
    webhookStatus?: GoogleRpcStatus;
}
