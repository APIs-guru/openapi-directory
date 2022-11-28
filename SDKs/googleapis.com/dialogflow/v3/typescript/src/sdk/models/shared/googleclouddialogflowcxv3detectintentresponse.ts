import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryResult } from "./googleclouddialogflowcxv3queryresult";


export enum GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}


// GoogleCloudDialogflowCxV3DetectIntentResponse
/** 
 * The message returned from the DetectIntent method.
**/
export class GoogleCloudDialogflowCxV3DetectIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCancellation" })
  allowCancellation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowCxV3QueryResult;

  @SpeakeasyMetadata({ data: "json, name=responseId" })
  responseId?: string;

  @SpeakeasyMetadata({ data: "json, name=responseType" })
  responseType?: GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum;
}
