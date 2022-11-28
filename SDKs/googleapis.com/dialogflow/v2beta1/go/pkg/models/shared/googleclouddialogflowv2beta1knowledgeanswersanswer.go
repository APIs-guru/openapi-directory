package shared

type GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum string

const (
	GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnumMatchConfidenceLevelUnspecified GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum = "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnumLow                             GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum = "LOW"
	GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnumMedium                          GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum = "MEDIUM"
	GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnumHigh                            GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum = "HIGH"
)

// GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer
// An answer from Knowledge Connector.
type GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer struct {
	Answer               *string                                                                     `json:"answer,omitempty"`
	FaqQuestion          *string                                                                     `json:"faqQuestion,omitempty"`
	MatchConfidence      *float32                                                                    `json:"matchConfidence,omitempty"`
	MatchConfidenceLevel *GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum `json:"matchConfidenceLevel,omitempty"`
	Source               *string                                                                     `json:"source,omitempty"`
}
