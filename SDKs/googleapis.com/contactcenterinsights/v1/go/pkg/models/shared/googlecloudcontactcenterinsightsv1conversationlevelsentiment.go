package shared

// GoogleCloudContactcenterinsightsV1ConversationLevelSentiment
// One channel of conversation-level sentiment data.
type GoogleCloudContactcenterinsightsV1ConversationLevelSentiment struct {
	ChannelTag    *int32                                           `json:"channelTag,omitempty"`
	SentimentData *GoogleCloudContactcenterinsightsV1SentimentData `json:"sentimentData,omitempty"`
}
