import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryResult } from "./googleclouddialogflowcxv3queryresult";



// GoogleCloudDialogflowCxV3FulfillIntentResponse
/** 
 * Response of FulfillIntent
**/
export class GoogleCloudDialogflowCxV3FulfillIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowCxV3QueryResult;

  @SpeakeasyMetadata({ data: "json, name=responseId" })
  responseId?: string;
}
