import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryResult } from "./googleclouddialogflowcxv3queryresult";
export declare enum GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}
/**
 * The message returned from the DetectIntent method.
**/
export declare class GoogleCloudDialogflowCxV3DetectIntentResponse extends SpeakeasyBase {
    allowCancellation?: boolean;
    outputAudio?: string;
    outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
    queryResult?: GoogleCloudDialogflowCxV3QueryResult;
    responseId?: string;
    responseType?: GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum;
}
