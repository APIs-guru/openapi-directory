import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum {
    AnswerRelevanceUnspecified = "ANSWER_RELEVANCE_UNSPECIFIED",
    Irrelevant = "IRRELEVANT",
    Relevant = "RELEVANT"
}
export declare enum GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum {
    DocumentCorrectnessUnspecified = "DOCUMENT_CORRECTNESS_UNSPECIFIED",
    Incorrect = "INCORRECT",
    Correct = "CORRECT"
}
export declare enum GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum {
    DocumentEfficiencyUnspecified = "DOCUMENT_EFFICIENCY_UNSPECIFIED",
    Inefficient = "INEFFICIENT",
    Efficient = "EFFICIENT"
}
/**
 * Detail feedback of Agent Assist result.
**/
export declare class GoogleCloudDialogflowV2AgentAssistantFeedback extends SpeakeasyBase {
    answerRelevance?: GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum;
    documentCorrectness?: GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum;
    documentEfficiency?: GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum;
}
