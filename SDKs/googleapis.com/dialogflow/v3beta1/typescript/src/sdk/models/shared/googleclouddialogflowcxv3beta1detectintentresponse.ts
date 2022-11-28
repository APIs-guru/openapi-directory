import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryResult } from "./googleclouddialogflowcxv3beta1queryresult";


export enum GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}


// GoogleCloudDialogflowCxV3beta1DetectIntentResponse
/** 
 * The message returned from the DetectIntent method.
**/
export class GoogleCloudDialogflowCxV3beta1DetectIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCancellation" })
  allowCancellation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;

  @SpeakeasyMetadata({ data: "json, name=responseId" })
  responseId?: string;

  @SpeakeasyMetadata({ data: "json, name=responseType" })
  responseType?: GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum;
}
