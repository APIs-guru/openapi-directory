import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=allRequiredParamsPresent" })
  allRequiredParamsPresent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancelsSlotFilling" })
  cancelsSlotFilling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentMessages", elemType: GoogleCloudDialogflowV2beta1IntentMessage })
  fulfillmentMessages?: GoogleCloudDialogflowV2beta1IntentMessage[];

  @SpeakeasyMetadata({ data: "json, name=fulfillmentText" })
  fulfillmentText?: string;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowV2beta1Intent;

  @SpeakeasyMetadata({ data: "json, name=intentDetectionConfidence" })
  intentDetectionConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=knowledgeAnswers" })
  knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2beta1Context })
  outputContexts?: GoogleCloudDialogflowV2beta1Context[];

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=queryText" })
  queryText?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysisResult" })
  sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;

  @SpeakeasyMetadata({ data: "json, name=speechRecognitionConfidence" })
  speechRecognitionConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=webhookPayload" })
  webhookPayload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=webhookSource" })
  webhookSource?: string;
}
