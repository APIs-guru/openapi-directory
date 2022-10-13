package shared

type ListPublisherConnectionsResponse struct {
	NextPageToken        *string               `json:"nextPageToken"`
	PublisherConnections []PublisherConnection `json:"publisherConnections"`
}
