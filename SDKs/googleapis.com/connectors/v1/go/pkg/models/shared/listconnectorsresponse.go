package shared

// ListConnectorsResponse
// Response message for Connectors.ListConnectors.
type ListConnectorsResponse struct {
	Connectors    []Connector `json:"connectors,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Unreachable   []string    `json:"unreachable,omitempty"`
}
