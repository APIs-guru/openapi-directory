package shared

// ListPrivateConnectionsResponse
// Response containing a list of private connection configurations.
type ListPrivateConnectionsResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	PrivateConnections []PrivateConnection `json:"privateConnections,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
}
