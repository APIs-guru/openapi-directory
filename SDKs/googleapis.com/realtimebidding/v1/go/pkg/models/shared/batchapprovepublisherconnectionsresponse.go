package shared

// BatchApprovePublisherConnectionsResponse
// A response for the request to approve a batch of publisher connections.
type BatchApprovePublisherConnectionsResponse struct {
	PublisherConnections []PublisherConnection `json:"publisherConnections,omitempty"`
}
