package shared

type GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata struct {
	Annotations      []GoogleCloudContactcenterinsightsV1CallAnnotation             `json:"annotations,omitempty"`
	Entities         map[string]GoogleCloudContactcenterinsightsV1Entity            `json:"entities,omitempty"`
	Intents          map[string]GoogleCloudContactcenterinsightsV1Intent            `json:"intents,omitempty"`
	IssueModelResult *GoogleCloudContactcenterinsightsV1IssueModelResult            `json:"issueModelResult,omitempty"`
	PhraseMatchers   map[string]GoogleCloudContactcenterinsightsV1PhraseMatchData   `json:"phraseMatchers,omitempty"`
	Sentiments       []GoogleCloudContactcenterinsightsV1ConversationLevelSentiment `json:"sentiments,omitempty"`
}
