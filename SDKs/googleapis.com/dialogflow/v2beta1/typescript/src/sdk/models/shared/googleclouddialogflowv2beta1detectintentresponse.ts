import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1QueryResult } from "./googleclouddialogflowv2beta1queryresult";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleCloudDialogflowV2beta1QueryResult } from "./googleclouddialogflowv2beta1queryresult";
import { GoogleRpcStatus } from "./googlerpcstatus";


// GoogleCloudDialogflowV2beta1DetectIntentResponse
/** 
 * The message returned from the DetectIntent method.
**/
export class GoogleCloudDialogflowV2beta1DetectIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternativeQueryResults", elemType: shared.GoogleCloudDialogflowV2beta1QueryResult })
  alternativeQueryResults?: GoogleCloudDialogflowV2beta1QueryResult[];

  @Metadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;

  @Metadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowV2beta1QueryResult;

  @Metadata({ data: "json, name=responseId" })
  responseId?: string;

  @Metadata({ data: "json, name=webhookStatus" })
  webhookStatus?: GoogleRpcStatus;
}
