package shared

type GoogleCloudContactcenterinsightsV1ListConversationsResponse struct {
	Conversations []GoogleCloudContactcenterinsightsV1Conversation `json:"conversations,omitempty"`
	NextPageToken *string                                          `json:"nextPageToken,omitempty"`
}
