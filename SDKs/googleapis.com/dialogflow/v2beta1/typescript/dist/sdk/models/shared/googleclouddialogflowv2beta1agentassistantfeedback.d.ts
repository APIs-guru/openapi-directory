import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback } from "./googleclouddialogflowv2beta1agentassistantfeedbacksummarizationfeedback";
export declare enum GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum {
    AnswerRelevanceUnspecified = "ANSWER_RELEVANCE_UNSPECIFIED",
    Irrelevant = "IRRELEVANT",
    Relevant = "RELEVANT"
}
export declare enum GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum {
    DocumentCorrectnessUnspecified = "DOCUMENT_CORRECTNESS_UNSPECIFIED",
    Incorrect = "INCORRECT",
    Correct = "CORRECT"
}
export declare enum GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum {
    DocumentEfficiencyUnspecified = "DOCUMENT_EFFICIENCY_UNSPECIFIED",
    Inefficient = "INEFFICIENT",
    Efficient = "EFFICIENT"
}
/**
 * Detail feedback of Agent Assistant result.
**/
export declare class GoogleCloudDialogflowV2beta1AgentAssistantFeedback extends SpeakeasyBase {
    answerRelevance?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum;
    documentCorrectness?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum;
    documentEfficiency?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum;
    summarizationFeedback?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback;
}
