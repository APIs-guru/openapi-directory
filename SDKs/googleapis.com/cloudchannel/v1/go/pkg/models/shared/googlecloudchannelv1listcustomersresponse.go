package shared

type GoogleCloudChannelV1ListCustomersResponse struct {
	Customers     []GoogleCloudChannelV1Customer `json:"customers"`
	NextPageToken *string                        `json:"nextPageToken"`
}
