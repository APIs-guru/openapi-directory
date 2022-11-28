import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3Page;

  @SpeakeasyMetadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dtmf" })
  dtmf?: GoogleCloudDialogflowCxV3DtmfInput;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowCxV3Intent;

  @SpeakeasyMetadata({ data: "json, name=intentDetectionConfidence" })
  intentDetectionConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: GoogleCloudDialogflowCxV3Match;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=responseMessages", elemType: GoogleCloudDialogflowCxV3ResponseMessage })
  responseMessages?: GoogleCloudDialogflowCxV3ResponseMessage[];

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysisResult" })
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3SentimentAnalysisResult;

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
