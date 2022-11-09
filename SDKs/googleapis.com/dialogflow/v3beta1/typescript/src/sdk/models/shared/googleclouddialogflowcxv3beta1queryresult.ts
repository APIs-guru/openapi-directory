import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;

  @Metadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @Metadata({ data: "json, name=dtmf" })
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;

  @Metadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowCxV3beta1Intent;

  @Metadata({ data: "json, name=intentDetectionConfidence" })
  intentDetectionConfidence?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=match" })
  match?: GoogleCloudDialogflowCxV3beta1Match;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=responseMessages", elemType: shared.GoogleCloudDialogflowCxV3beta1ResponseMessage })
  responseMessages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[];

  @Metadata({ data: "json, name=sentimentAnalysisResult" })
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=transcript" })
  transcript?: string;

  @Metadata({ data: "json, name=triggerEvent" })
  triggerEvent?: string;

  @Metadata({ data: "json, name=triggerIntent" })
  triggerIntent?: string;

  @Metadata({ data: "json, name=webhookPayloads" })
  webhookPayloads?: Map<string, any>[];

  @Metadata({ data: "json, name=webhookStatuses", elemType: shared.GoogleRpcStatus })
  webhookStatuses?: GoogleRpcStatus[];
}
