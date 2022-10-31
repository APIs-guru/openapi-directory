package shared



type ListConnectorVersionsResponse struct {
    ConnectorVersions []ConnectorVersion `json:"connectorVersions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

