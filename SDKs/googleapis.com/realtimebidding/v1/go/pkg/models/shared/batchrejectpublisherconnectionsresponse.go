package shared

type BatchRejectPublisherConnectionsResponse struct {
	PublisherConnections []PublisherConnection `json:"publisherConnections,omitempty"`
}
