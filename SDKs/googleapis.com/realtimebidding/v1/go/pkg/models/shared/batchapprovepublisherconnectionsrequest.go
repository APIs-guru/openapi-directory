package shared

// BatchApprovePublisherConnectionsRequest
// A request to approve a batch of publisher connections.
type BatchApprovePublisherConnectionsRequest struct {
	Names []string `json:"names,omitempty"`
}
