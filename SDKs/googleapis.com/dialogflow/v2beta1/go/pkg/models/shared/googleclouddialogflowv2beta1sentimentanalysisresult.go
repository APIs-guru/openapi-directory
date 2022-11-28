package shared

// GoogleCloudDialogflowV2beta1SentimentAnalysisResult
// The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
type GoogleCloudDialogflowV2beta1SentimentAnalysisResult struct {
	QueryTextSentiment *GoogleCloudDialogflowV2beta1Sentiment `json:"queryTextSentiment,omitempty"`
}
