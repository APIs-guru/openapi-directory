import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryResult } from "./googleclouddialogflowcxv3beta1queryresult";
export declare enum GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}
/**
 * The message returned from the DetectIntent method.
**/
export declare class GoogleCloudDialogflowCxV3beta1DetectIntentResponse extends SpeakeasyBase {
    allowCancellation?: boolean;
    outputAudio?: string;
    outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
    queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;
    responseId?: string;
    responseType?: GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum;
}
