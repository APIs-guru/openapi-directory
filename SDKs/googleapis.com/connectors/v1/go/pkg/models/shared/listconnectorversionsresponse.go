package shared

type ListConnectorVersionsResponse struct {
	ConnectorVersions []ConnectorVersion `json:"connectorVersions"`
	NextPageToken     *string            `json:"nextPageToken"`
	Unreachable       []string           `json:"unreachable"`
}
