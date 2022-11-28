import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessage } from "./googleclouddialogflowv2intentmessage";
import { GoogleCloudDialogflowV2Intent } from "./googleclouddialogflowv2intent";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleCloudDialogflowV2SentimentAnalysisResult } from "./googleclouddialogflowv2sentimentanalysisresult";



// GoogleCloudDialogflowV2QueryResult
/** 
 * Represents the result of conversational query or event processing.
**/
export class GoogleCloudDialogflowV2QueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=allRequiredParamsPresent" })
  allRequiredParamsPresent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancelsSlotFilling" })
  cancelsSlotFilling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=diagnosticInfo" })
  diagnosticInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentMessages", elemType: GoogleCloudDialogflowV2IntentMessage })
  fulfillmentMessages?: GoogleCloudDialogflowV2IntentMessage[];

  @SpeakeasyMetadata({ data: "json, name=fulfillmentText" })
  fulfillmentText?: string;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowV2Intent;

  @SpeakeasyMetadata({ data: "json, name=intentDetectionConfidence" })
  intentDetectionConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2Context })
  outputContexts?: GoogleCloudDialogflowV2Context[];

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=queryText" })
  queryText?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysisResult" })
  sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;

  @SpeakeasyMetadata({ data: "json, name=speechRecognitionConfidence" })
  speechRecognitionConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=webhookPayload" })
  webhookPayload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=webhookSource" })
  webhookSource?: string;
}
