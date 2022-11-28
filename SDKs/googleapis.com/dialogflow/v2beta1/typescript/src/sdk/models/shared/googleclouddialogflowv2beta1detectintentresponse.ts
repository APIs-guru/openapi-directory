import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1QueryResult } from "./googleclouddialogflowv2beta1queryresult";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleRpcStatus } from "./googlerpcstatus";



// GoogleCloudDialogflowV2beta1DetectIntentResponse
/** 
 * The message returned from the DetectIntent method.
**/
export class GoogleCloudDialogflowV2beta1DetectIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternativeQueryResults", elemType: GoogleCloudDialogflowV2beta1QueryResult })
  alternativeQueryResults?: GoogleCloudDialogflowV2beta1QueryResult[];

  @SpeakeasyMetadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;

  @SpeakeasyMetadata({ data: "json, name=responseId" })
  responseId?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookStatus" })
  webhookStatus?: GoogleRpcStatus;
}
