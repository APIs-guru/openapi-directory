import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessage } from "./googleclouddialogflowv2beta1intentmessage";
import { GoogleCloudDialogflowV2beta1Intent } from "./googleclouddialogflowv2beta1intent";
import { GoogleCloudDialogflowV2beta1KnowledgeAnswers } from "./googleclouddialogflowv2beta1knowledgeanswers";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisResult } from "./googleclouddialogflowv2beta1sentimentanalysisresult";


// GoogleCloudDialogflowV2beta1QueryResult
/** 
 * Represents the result of conversational query or event processing.
**/
export class GoogleCloudDialogflowV2beta1QueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=allRequiredParamsPresent" })
  allRequiredParamsPresent?: boolean;

  @Metadata({ data: "json, name=cancelsSlotFilling" })
  cancelsSlotFilling?: boolean;

  @Metadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @Metadata({ data: "json, name=fulfillmentMessages", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessage })
  fulfillmentMessages?: GoogleCloudDialogflowV2beta1IntentMessage[];

  @Metadata({ data: "json, name=fulfillmentText" })
  fulfillmentText?: string;

  @Metadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowV2beta1Intent;

  @Metadata({ data: "json, name=intentDetectionConfidence" })
  intentDetectionConfidence?: number;

  @Metadata({ data: "json, name=knowledgeAnswers" })
  knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=outputContexts", elemType: shared.GoogleCloudDialogflowV2beta1Context })
  outputContexts?: GoogleCloudDialogflowV2beta1Context[];

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=queryText" })
  queryText?: string;

  @Metadata({ data: "json, name=sentimentAnalysisResult" })
  sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;

  @Metadata({ data: "json, name=speechRecognitionConfidence" })
  speechRecognitionConfidence?: number;

  @Metadata({ data: "json, name=webhookPayload" })
  webhookPayload?: Map<string, any>;

  @Metadata({ data: "json, name=webhookSource" })
  webhookSource?: string;
}
