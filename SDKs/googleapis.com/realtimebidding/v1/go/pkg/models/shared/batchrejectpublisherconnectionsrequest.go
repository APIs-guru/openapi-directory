package shared

// BatchRejectPublisherConnectionsRequest
// A request to reject a batch of publisher connections.
type BatchRejectPublisherConnectionsRequest struct {
	Names []string `json:"names,omitempty"`
}
