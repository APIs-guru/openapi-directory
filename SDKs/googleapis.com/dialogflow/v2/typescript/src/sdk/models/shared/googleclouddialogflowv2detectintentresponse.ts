import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2QueryResult } from "./googleclouddialogflowv2queryresult";
import { GoogleRpcStatus } from "./googlerpcstatus";



// GoogleCloudDialogflowV2DetectIntentResponse
/** 
 * The message returned from the DetectIntent method.
**/
export class GoogleCloudDialogflowV2DetectIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowV2QueryResult;

  @SpeakeasyMetadata({ data: "json, name=responseId" })
  responseId?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookStatus" })
  webhookStatus?: GoogleRpcStatus;
}
