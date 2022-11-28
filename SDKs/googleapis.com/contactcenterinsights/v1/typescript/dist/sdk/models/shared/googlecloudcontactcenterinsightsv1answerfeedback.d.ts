import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum {
    CorrectnessLevelUnspecified = "CORRECTNESS_LEVEL_UNSPECIFIED",
    NotCorrect = "NOT_CORRECT",
    PartiallyCorrect = "PARTIALLY_CORRECT",
    FullyCorrect = "FULLY_CORRECT"
}
/**
 * The feedback that the customer has about a certain answer in the conversation.
**/
export declare class GoogleCloudContactcenterinsightsV1AnswerFeedback extends SpeakeasyBase {
    clicked?: boolean;
    correctnessLevel?: GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum;
    displayed?: boolean;
}
