import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryResult } from "./googleclouddialogflowcxv3beta1queryresult";

export enum GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED"
,    Partial = "PARTIAL"
,    Final = "FINAL"
}


// GoogleCloudDialogflowCxV3beta1DetectIntentResponse
/** 
 * The message returned from the DetectIntent method.
**/
export class GoogleCloudDialogflowCxV3beta1DetectIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCancellation" })
  allowCancellation?: boolean;

  @Metadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;

  @Metadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;

  @Metadata({ data: "json, name=responseId" })
  responseId?: string;

  @Metadata({ data: "json, name=responseType" })
  responseType?: GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum;
}
