import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessage } from "./googleclouddialogflowv2intentmessage";
import { GoogleCloudDialogflowV2Intent } from "./googleclouddialogflowv2intent";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleCloudDialogflowV2SentimentAnalysisResult } from "./googleclouddialogflowv2sentimentanalysisresult";
/**
 * Represents the result of conversational query or event processing.
**/
export declare class GoogleCloudDialogflowV2QueryResult extends SpeakeasyBase {
    action?: string;
    allRequiredParamsPresent?: boolean;
    cancelsSlotFilling?: boolean;
    diagnosticInfo?: Map<string, any>;
    fulfillmentMessages?: GoogleCloudDialogflowV2IntentMessage[];
    fulfillmentText?: string;
    intent?: GoogleCloudDialogflowV2Intent;
    intentDetectionConfidence?: number;
    languageCode?: string;
    outputContexts?: GoogleCloudDialogflowV2Context[];
    parameters?: Map<string, any>;
    queryText?: string;
    sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;
    speechRecognitionConfidence?: number;
    webhookPayload?: Map<string, any>;
    webhookSource?: string;
}
