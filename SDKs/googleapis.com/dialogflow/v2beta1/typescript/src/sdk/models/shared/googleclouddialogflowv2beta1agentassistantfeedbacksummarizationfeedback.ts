import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback
/** 
 * Feedback for conversation summarization.
**/
export class GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp?: string;

  @Metadata({ data: "json, name=submitTimestamp" })
  submitTimestamp?: string;

  @Metadata({ data: "json, name=summaryText" })
  summaryText?: string;
}
