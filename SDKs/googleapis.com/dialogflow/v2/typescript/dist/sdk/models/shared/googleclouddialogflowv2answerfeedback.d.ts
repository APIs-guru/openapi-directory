import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AgentAssistantFeedback } from "./googleclouddialogflowv2agentassistantfeedback";
export declare enum GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum {
    CorrectnessLevelUnspecified = "CORRECTNESS_LEVEL_UNSPECIFIED",
    NotCorrect = "NOT_CORRECT",
    PartiallyCorrect = "PARTIALLY_CORRECT",
    FullyCorrect = "FULLY_CORRECT"
}
/**
 * Represents feedback the customer has about the quality & correctness of a certain answer in a conversation.
**/
export declare class GoogleCloudDialogflowV2AnswerFeedback extends SpeakeasyBase {
    agentAssistantDetailFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedback;
    clickTime?: string;
    clicked?: boolean;
    correctnessLevel?: GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum;
    displayTime?: string;
    displayed?: boolean;
}
