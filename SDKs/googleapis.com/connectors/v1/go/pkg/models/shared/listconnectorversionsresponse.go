package shared

// ListConnectorVersionsResponse
// Response message for Connectors.ListConnectorVersions.
type ListConnectorVersionsResponse struct {
	ConnectorVersions []ConnectorVersion `json:"connectorVersions,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
	Unreachable       []string           `json:"unreachable,omitempty"`
}
