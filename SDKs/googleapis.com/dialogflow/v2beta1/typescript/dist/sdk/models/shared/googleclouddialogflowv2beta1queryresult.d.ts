import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessage } from "./googleclouddialogflowv2beta1intentmessage";
import { GoogleCloudDialogflowV2beta1Intent } from "./googleclouddialogflowv2beta1intent";
import { GoogleCloudDialogflowV2beta1KnowledgeAnswers } from "./googleclouddialogflowv2beta1knowledgeanswers";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisResult } from "./googleclouddialogflowv2beta1sentimentanalysisresult";
/**
 * Represents the result of conversational query or event processing.
**/
export declare class GoogleCloudDialogflowV2beta1QueryResult extends SpeakeasyBase {
    action?: string;
    allRequiredParamsPresent?: boolean;
    cancelsSlotFilling?: boolean;
    diagnosticInfo?: Map<string, any>;
    fulfillmentMessages?: GoogleCloudDialogflowV2beta1IntentMessage[];
    fulfillmentText?: string;
    intent?: GoogleCloudDialogflowV2beta1Intent;
    intentDetectionConfidence?: number;
    knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;
    languageCode?: string;
    outputContexts?: GoogleCloudDialogflowV2beta1Context[];
    parameters?: Map<string, any>;
    queryText?: string;
    sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
    speechRecognitionConfidence?: number;
    webhookPayload?: Map<string, any>;
    webhookSource?: string;
}
