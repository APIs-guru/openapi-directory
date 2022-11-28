package shared

// GoogleCloudChannelV1ListSubscribersResponse
// Response Message for ListSubscribers.
type GoogleCloudChannelV1ListSubscribersResponse struct {
	NextPageToken   *string  `json:"nextPageToken,omitempty"`
	ServiceAccounts []string `json:"serviceAccounts,omitempty"`
	Topic           *string  `json:"topic,omitempty"`
}
