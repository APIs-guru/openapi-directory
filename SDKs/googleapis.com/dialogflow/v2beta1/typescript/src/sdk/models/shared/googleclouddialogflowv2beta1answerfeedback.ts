import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1AgentAssistantFeedback } from "./googleclouddialogflowv2beta1agentassistantfeedback";

export enum GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum {
    CorrectnessLevelUnspecified = "CORRECTNESS_LEVEL_UNSPECIFIED"
,    NotCorrect = "NOT_CORRECT"
,    PartiallyCorrect = "PARTIALLY_CORRECT"
,    FullyCorrect = "FULLY_CORRECT"
}


// GoogleCloudDialogflowV2beta1AnswerFeedback
/** 
 * Represents feedback the customer has about the quality & correctness of a certain answer in a conversation.
**/
export class GoogleCloudDialogflowV2beta1AnswerFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentAssistantDetailFeedback" })
  agentAssistantDetailFeedback?: GoogleCloudDialogflowV2beta1AgentAssistantFeedback;

  @Metadata({ data: "json, name=clickTime" })
  clickTime?: string;

  @Metadata({ data: "json, name=clicked" })
  clicked?: boolean;

  @Metadata({ data: "json, name=correctnessLevel" })
  correctnessLevel?: GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum;

  @Metadata({ data: "json, name=displayTime" })
  displayTime?: string;

  @Metadata({ data: "json, name=displayed" })
  displayed?: boolean;
}
