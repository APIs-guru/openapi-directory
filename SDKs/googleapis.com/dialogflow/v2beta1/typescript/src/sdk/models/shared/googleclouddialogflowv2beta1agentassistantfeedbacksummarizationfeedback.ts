import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback
/** 
 * Feedback for conversation summarization.
**/
export class GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTimestamp" })
  startTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=submitTimestamp" })
  submitTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=summaryText" })
  summaryText?: string;
}
