package shared

// GoogleCloudChannelV1ListCustomersResponse
// Response message for CloudChannelService.ListCustomers.
type GoogleCloudChannelV1ListCustomersResponse struct {
	Customers     []GoogleCloudChannelV1Customer `json:"customers,omitempty"`
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
}
