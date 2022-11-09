import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryResult } from "./googleclouddialogflowcxv3beta1queryresult";


// GoogleCloudDialogflowCxV3beta1FulfillIntentResponse
/** 
 * Response of FulfillIntent
**/
export class GoogleCloudDialogflowCxV3beta1FulfillIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;

  @Metadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;

  @Metadata({ data: "json, name=responseId" })
  responseId?: string;
}
