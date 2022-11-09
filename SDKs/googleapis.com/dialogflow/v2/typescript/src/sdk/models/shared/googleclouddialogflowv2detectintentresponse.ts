import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2QueryResult } from "./googleclouddialogflowv2queryresult";
import { GoogleRpcStatus } from "./googlerpcstatus";


// GoogleCloudDialogflowV2DetectIntentResponse
/** 
 * The message returned from the DetectIntent method.
**/
export class GoogleCloudDialogflowV2DetectIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputAudio" })
  outputAudio?: string;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;

  @Metadata({ data: "json, name=queryResult" })
  queryResult?: GoogleCloudDialogflowV2QueryResult;

  @Metadata({ data: "json, name=responseId" })
  responseId?: string;

  @Metadata({ data: "json, name=webhookStatus" })
  webhookStatus?: GoogleRpcStatus;
}
