import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1DtmfInput } from "./googleclouddialogflowcxv3beta1dtmfinput";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
import { GoogleCloudDialogflowCxV3beta1Match } from "./googleclouddialogflowcxv3beta1match";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage } from "./googleclouddialogflowcxv3beta1responsemessage";
import { GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult } from "./googleclouddialogflowcxv3beta1sentimentanalysisresult";
import { GoogleRpcStatus } from "./googlerpcstatus";



// GoogleCloudDialogflowCxV3beta1QueryResult
/** 
 * Represents the result of a conversational query.
**/
export class GoogleCloudDialogflowCxV3beta1QueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;

  @SpeakeasyMetadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dtmf" })
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowCxV3beta1Intent;

  @SpeakeasyMetadata({ data: "json, name=intentDetectionConfidence" })
  intentDetectionConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: GoogleCloudDialogflowCxV3beta1Match;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=responseMessages", elemType: GoogleCloudDialogflowCxV3beta1ResponseMessage })
  responseMessages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[];

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysisResult" })
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=transcript" })
  transcript?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerEvent" })
  triggerEvent?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerIntent" })
  triggerIntent?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookPayloads" })
  webhookPayloads?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=webhookStatuses", elemType: GoogleRpcStatus })
  webhookStatuses?: GoogleRpcStatus[];
}
