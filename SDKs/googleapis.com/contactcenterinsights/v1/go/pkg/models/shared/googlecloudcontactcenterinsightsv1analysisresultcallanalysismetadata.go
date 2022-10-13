package shared

type GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata struct {
	Annotations      []GoogleCloudContactcenterinsightsV1CallAnnotation             `json:"annotations"`
	Entities         map[string]GoogleCloudContactcenterinsightsV1Entity            `json:"entities"`
	Intents          map[string]GoogleCloudContactcenterinsightsV1Intent            `json:"intents"`
	IssueModelResult *GoogleCloudContactcenterinsightsV1IssueModelResult            `json:"issueModelResult"`
	PhraseMatchers   map[string]GoogleCloudContactcenterinsightsV1PhraseMatchData   `json:"phraseMatchers"`
	Sentiments       []GoogleCloudContactcenterinsightsV1ConversationLevelSentiment `json:"sentiments"`
}
