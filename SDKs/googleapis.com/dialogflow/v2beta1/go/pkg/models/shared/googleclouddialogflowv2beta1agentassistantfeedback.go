package shared

type GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum string

const (
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnumAnswerRelevanceUnspecified GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum = "ANSWER_RELEVANCE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnumIrrelevant                 GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum = "IRRELEVANT"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnumRelevant                   GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum = "RELEVANT"
)

type GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum string

const (
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnumDocumentCorrectnessUnspecified GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum = "DOCUMENT_CORRECTNESS_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnumIncorrect                      GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum = "INCORRECT"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnumCorrect                        GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum = "CORRECT"
)

type GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum string

const (
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnumDocumentEfficiencyUnspecified GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum = "DOCUMENT_EFFICIENCY_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnumInefficient                   GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum = "INEFFICIENT"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnumEfficient                     GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum = "EFFICIENT"
)

// GoogleCloudDialogflowV2beta1AgentAssistantFeedback
// Detail feedback of Agent Assistant result.
type GoogleCloudDialogflowV2beta1AgentAssistantFeedback struct {
	AnswerRelevance       *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum     `json:"answerRelevance,omitempty"`
	DocumentCorrectness   *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum `json:"documentCorrectness,omitempty"`
	DocumentEfficiency    *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum  `json:"documentEfficiency,omitempty"`
	SummarizationFeedback *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback   `json:"summarizationFeedback,omitempty"`
}
