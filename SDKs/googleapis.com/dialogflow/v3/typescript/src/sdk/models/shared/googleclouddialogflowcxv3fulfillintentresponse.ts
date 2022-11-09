import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryResult } from "./googleclouddialogflowcxv3queryresult";


// GoogleCloudDialogflowCxV3FulfillIntentResponse
/** 
 * Response of FulfillIntent
**/
export class GoogleCloudDialogflowCxV3FulfillIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;

  @Metadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowCxV3QueryResult;

  @Metadata({ data: "json, name=responseId" })
  responseId?: string;
}
