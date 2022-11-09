import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum {
    AnswerRelevanceUnspecified = "ANSWER_RELEVANCE_UNSPECIFIED"
,    Irrelevant = "IRRELEVANT"
,    Relevant = "RELEVANT"
}

export enum GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum {
    DocumentCorrectnessUnspecified = "DOCUMENT_CORRECTNESS_UNSPECIFIED"
,    Incorrect = "INCORRECT"
,    Correct = "CORRECT"
}

export enum GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum {
    DocumentEfficiencyUnspecified = "DOCUMENT_EFFICIENCY_UNSPECIFIED"
,    Inefficient = "INEFFICIENT"
,    Efficient = "EFFICIENT"
}


// GoogleCloudDialogflowV2AgentAssistantFeedback
/** 
 * Detail feedback of Agent Assist result.
**/
export class GoogleCloudDialogflowV2AgentAssistantFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerRelevance" })
  answerRelevance?: GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum;

  @Metadata({ data: "json, name=documentCorrectness" })
  documentCorrectness?: GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum;

  @Metadata({ data: "json, name=documentEfficiency" })
  documentEfficiency?: GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum;
}
