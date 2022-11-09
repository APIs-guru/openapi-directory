import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3DtmfInput } from "./googleclouddialogflowcxv3dtmfinput";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";
import { GoogleCloudDialogflowCxV3ResponseMessage } from "./googleclouddialogflowcxv3responsemessage";
import { GoogleCloudDialogflowCxV3SentimentAnalysisResult } from "./googleclouddialogflowcxv3sentimentanalysisresult";
import { GoogleRpcStatus } from "./googlerpcstatus";


// GoogleCloudDialogflowCxV3QueryResult
/** 
 * Represents the result of a conversational query.
**/
export class GoogleCloudDialogflowCxV3QueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3Page;

  @Metadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @Metadata({ data: "json, name=dtmf" })
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;

  @Metadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowCxV3Intent;

  @Metadata({ data: "json, name=intentDetectionConfidence" })
  intentDetectionConfidence?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=match" })
  match?: GoogleCloudDialogflowCxV3Match;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=responseMessages", elemType: shared.GoogleCloudDialogflowCxV3ResponseMessage })
  responseMessages?: GoogleCloudDialogflowCxV3ResponseMessage[];

  @Metadata({ data: "json, name=sentimentAnalysisResult" })
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3SentimentAnalysisResult;

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
