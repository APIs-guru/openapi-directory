import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum {
    AnswerRelevanceUnspecified = "ANSWER_RELEVANCE_UNSPECIFIED",
    Irrelevant = "IRRELEVANT",
    Relevant = "RELEVANT"
}

export enum GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum {
    DocumentCorrectnessUnspecified = "DOCUMENT_CORRECTNESS_UNSPECIFIED",
    Incorrect = "INCORRECT",
    Correct = "CORRECT"
}

export enum GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum {
    DocumentEfficiencyUnspecified = "DOCUMENT_EFFICIENCY_UNSPECIFIED",
    Inefficient = "INEFFICIENT",
    Efficient = "EFFICIENT"
}


// GoogleCloudDialogflowV2AgentAssistantFeedback
/** 
 * Detail feedback of Agent Assist result.
**/
export class GoogleCloudDialogflowV2AgentAssistantFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerRelevance" })
  answerRelevance?: GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum;

  @SpeakeasyMetadata({ data: "json, name=documentCorrectness" })
  documentCorrectness?: GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum;

  @SpeakeasyMetadata({ data: "json, name=documentEfficiency" })
  documentEfficiency?: GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum;
}
