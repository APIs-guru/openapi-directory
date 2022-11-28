package shared

// ListInstanceConfigsResponse
// The response for ListInstanceConfigs.
type ListInstanceConfigsResponse struct {
	InstanceConfigs []InstanceConfig `json:"instanceConfigs,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
}
