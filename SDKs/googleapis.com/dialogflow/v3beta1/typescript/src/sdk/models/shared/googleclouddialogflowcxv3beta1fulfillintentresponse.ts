import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryResult } from "./googleclouddialogflowcxv3beta1queryresult";



// GoogleCloudDialogflowCxV3beta1FulfillIntentResponse
/** 
 * Response of FulfillIntent
**/
export class GoogleCloudDialogflowCxV3beta1FulfillIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;

  @SpeakeasyMetadata({ data: "json, name=responseId" })
  responseId?: string;
}
