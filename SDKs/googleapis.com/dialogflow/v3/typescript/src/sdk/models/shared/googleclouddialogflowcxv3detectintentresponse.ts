import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryResult } from "./googleclouddialogflowcxv3queryresult";

export enum GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED"
,    Partial = "PARTIAL"
,    Final = "FINAL"
}


// GoogleCloudDialogflowCxV3DetectIntentResponse
/** 
 * The message returned from the DetectIntent method.
**/
export class GoogleCloudDialogflowCxV3DetectIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCancellation" })
  allowCancellation?: boolean;

  @Metadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;

  @Metadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowCxV3QueryResult;

  @Metadata({ data: "json, name=responseId" })
  responseId?: string;

  @Metadata({ data: "json, name=responseType" })
  responseType?: GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum;
}
