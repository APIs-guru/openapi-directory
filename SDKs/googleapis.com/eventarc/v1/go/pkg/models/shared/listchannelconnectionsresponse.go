package shared

// ListChannelConnectionsResponse
// The response message for the `ListChannelConnections` method.
type ListChannelConnectionsResponse struct {
	ChannelConnections []ChannelConnection `json:"channelConnections,omitempty"`
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
}
