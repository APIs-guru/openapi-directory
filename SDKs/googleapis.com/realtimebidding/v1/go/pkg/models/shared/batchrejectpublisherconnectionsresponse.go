package shared

// BatchRejectPublisherConnectionsResponse
// A response for the request to reject a batch of publisher connections.
type BatchRejectPublisherConnectionsResponse struct {
	PublisherConnections []PublisherConnection `json:"publisherConnections,omitempty"`
}
