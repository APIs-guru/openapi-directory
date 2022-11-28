package shared

// ListConsumerOverridesResponse
// Response message for ListConsumerOverrides.
type ListConsumerOverridesResponse struct {
	NextPageToken *string         `json:"nextPageToken,omitempty"`
	Overrides     []QuotaOverride `json:"overrides,omitempty"`
}
