package shared

type ListPrivateConnectionsResponse struct {
	NextPageToken      *string             `json:"nextPageToken"`
	PrivateConnections []PrivateConnection `json:"privateConnections"`
	Unreachable        []string            `json:"unreachable"`
}
