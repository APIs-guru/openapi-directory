package shared

// ListPublisherConnectionsResponse
// A response to a request for listing publisher connections.
type ListPublisherConnectionsResponse struct {
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	PublisherConnections []PublisherConnection `json:"publisherConnections,omitempty"`
}
