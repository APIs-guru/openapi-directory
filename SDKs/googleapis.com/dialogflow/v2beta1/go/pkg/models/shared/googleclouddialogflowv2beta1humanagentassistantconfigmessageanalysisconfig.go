package shared

// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig
// Configuration for analyses to run on each conversation message.
type GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig struct {
	EnableEntityExtraction  *bool `json:"enableEntityExtraction,omitempty"`
	EnableSentimentAnalysis *bool `json:"enableSentimentAnalysis,omitempty"`
}
