package shared

// UpdateInstanceMetadataItemsResponse
// Response for adding/changing metadata items for an instance.
type UpdateInstanceMetadataItemsResponse struct {
	Items map[string]string `json:"items,omitempty"`
}
