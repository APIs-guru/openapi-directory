package shared

type GoogleCloudChannelV1ListCustomersResponse struct {
	Customers     []GoogleCloudChannelV1Customer `json:"customers,omitempty"`
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
}
