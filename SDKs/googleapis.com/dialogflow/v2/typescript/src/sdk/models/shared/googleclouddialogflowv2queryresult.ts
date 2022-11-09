import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessage } from "./googleclouddialogflowv2intentmessage";
import { GoogleCloudDialogflowV2Intent } from "./googleclouddialogflowv2intent";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleCloudDialogflowV2SentimentAnalysisResult } from "./googleclouddialogflowv2sentimentanalysisresult";


// GoogleCloudDialogflowV2QueryResult
/** 
 * Represents the result of conversational query or event processing.
**/
export class GoogleCloudDialogflowV2QueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=allRequiredParamsPresent" })
  allRequiredParamsPresent?: boolean;

  @Metadata({ data: "json, name=cancelsSlotFilling" })
  cancelsSlotFilling?: boolean;

  @Metadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @Metadata({ data: "json, name=fulfillmentMessages", elemType: shared.GoogleCloudDialogflowV2IntentMessage })
  fulfillmentMessages?: GoogleCloudDialogflowV2IntentMessage[];

  @Metadata({ data: "json, name=fulfillmentText" })
  fulfillmentText?: string;

  @Metadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowV2Intent;

  @Metadata({ data: "json, name=intentDetectionConfidence" })
  intentDetectionConfidence?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=outputContexts", elemType: shared.GoogleCloudDialogflowV2Context })
  outputContexts?: GoogleCloudDialogflowV2Context[];

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=queryText" })
  queryText?: string;

  @Metadata({ data: "json, name=sentimentAnalysisResult" })
  sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;

  @Metadata({ data: "json, name=speechRecognitionConfidence" })
  speechRecognitionConfidence?: number;

  @Metadata({ data: "json, name=webhookPayload" })
  webhookPayload?: Map<string, any>;

  @Metadata({ data: "json, name=webhookSource" })
  webhookSource?: string;
}
