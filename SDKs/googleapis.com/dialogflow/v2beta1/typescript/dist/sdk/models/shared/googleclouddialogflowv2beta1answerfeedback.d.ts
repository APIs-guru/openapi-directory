import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AgentAssistantFeedback } from "./googleclouddialogflowv2beta1agentassistantfeedback";
export declare enum GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum {
    CorrectnessLevelUnspecified = "CORRECTNESS_LEVEL_UNSPECIFIED",
    NotCorrect = "NOT_CORRECT",
    PartiallyCorrect = "PARTIALLY_CORRECT",
    FullyCorrect = "FULLY_CORRECT"
}
/**
 * Represents feedback the customer has about the quality & correctness of a certain answer in a conversation.
**/
export declare class GoogleCloudDialogflowV2beta1AnswerFeedback extends SpeakeasyBase {
    agentAssistantDetailFeedback?: GoogleCloudDialogflowV2beta1AgentAssistantFeedback;
    clickTime?: string;
    clicked?: boolean;
    correctnessLevel?: GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum;
    displayTime?: string;
    displayed?: boolean;
}
