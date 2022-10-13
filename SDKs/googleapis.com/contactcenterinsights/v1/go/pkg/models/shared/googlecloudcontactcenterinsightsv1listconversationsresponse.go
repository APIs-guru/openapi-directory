package shared

type GoogleCloudContactcenterinsightsV1ListConversationsResponse struct {
	Conversations []GoogleCloudContactcenterinsightsV1Conversation `json:"conversations"`
	NextPageToken *string                                          `json:"nextPageToken"`
}
