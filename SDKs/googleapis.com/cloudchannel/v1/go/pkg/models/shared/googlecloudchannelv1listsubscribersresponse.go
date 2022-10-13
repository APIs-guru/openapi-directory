package shared

type GoogleCloudChannelV1ListSubscribersResponse struct {
	NextPageToken   *string  `json:"nextPageToken"`
	ServiceAccounts []string `json:"serviceAccounts"`
	Topic           *string  `json:"topic"`
}
