package shared

type GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum string

const (
	GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnumAnswerRelevanceUnspecified GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum = "ANSWER_RELEVANCE_UNSPECIFIED"
	GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnumIrrelevant                 GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum = "IRRELEVANT"
	GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnumRelevant                   GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum = "RELEVANT"
)

type GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum string

const (
	GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnumDocumentCorrectnessUnspecified GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum = "DOCUMENT_CORRECTNESS_UNSPECIFIED"
	GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnumIncorrect                      GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum = "INCORRECT"
	GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnumCorrect                        GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum = "CORRECT"
)

type GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum string

const (
	GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnumDocumentEfficiencyUnspecified GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum = "DOCUMENT_EFFICIENCY_UNSPECIFIED"
	GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnumInefficient                   GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum = "INEFFICIENT"
	GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnumEfficient                     GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum = "EFFICIENT"
)

type GoogleCloudDialogflowV2AgentAssistantFeedback struct {
	AnswerRelevance     *GoogleCloudDialogflowV2AgentAssistantFeedbackAnswerRelevanceEnum     `json:"answerRelevance"`
	DocumentCorrectness *GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentCorrectnessEnum `json:"documentCorrectness"`
	DocumentEfficiency  *GoogleCloudDialogflowV2AgentAssistantFeedbackDocumentEfficiencyEnum  `json:"documentEfficiency"`
}
