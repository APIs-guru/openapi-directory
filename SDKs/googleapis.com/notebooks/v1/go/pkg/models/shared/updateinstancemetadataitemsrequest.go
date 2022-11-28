package shared

// UpdateInstanceMetadataItemsRequest
// Request for adding/changing metadata items for an instance.
type UpdateInstanceMetadataItemsRequest struct {
	Items map[string]string `json:"items,omitempty"`
}
