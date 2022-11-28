package shared

// GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig
// Configuration for analyses to run on each conversation message.
type GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig struct {
	EnableEntityExtraction  *bool `json:"enableEntityExtraction,omitempty"`
	EnableSentimentAnalysis *bool `json:"enableSentimentAnalysis,omitempty"`
}
