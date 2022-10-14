package shared

type ListPublisherConnectionsResponse struct {
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	PublisherConnections []PublisherConnection `json:"publisherConnections,omitempty"`
}
