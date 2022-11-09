import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback } from "./googleclouddialogflowv2beta1agentassistantfeedbacksummarizationfeedback";

export enum GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum {
    AnswerRelevanceUnspecified = "ANSWER_RELEVANCE_UNSPECIFIED"
,    Irrelevant = "IRRELEVANT"
,    Relevant = "RELEVANT"
}

export enum GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum {
    DocumentCorrectnessUnspecified = "DOCUMENT_CORRECTNESS_UNSPECIFIED"
,    Incorrect = "INCORRECT"
,    Correct = "CORRECT"
}

export enum GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum {
    DocumentEfficiencyUnspecified = "DOCUMENT_EFFICIENCY_UNSPECIFIED"
,    Inefficient = "INEFFICIENT"
,    Efficient = "EFFICIENT"
}


// GoogleCloudDialogflowV2beta1AgentAssistantFeedback
/** 
 * Detail feedback of Agent Assistant result.
**/
export class GoogleCloudDialogflowV2beta1AgentAssistantFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerRelevance" })
  answerRelevance?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum;

  @Metadata({ data: "json, name=documentCorrectness" })
  documentCorrectness?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum;

  @Metadata({ data: "json, name=documentEfficiency" })
  documentEfficiency?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum;

  @Metadata({ data: "json, name=summarizationFeedback" })
  summarizationFeedback?: GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback;
}
