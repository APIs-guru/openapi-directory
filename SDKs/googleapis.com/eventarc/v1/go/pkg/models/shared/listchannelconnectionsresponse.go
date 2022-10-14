package shared

type ListChannelConnectionsResponse struct {
	ChannelConnections []ChannelConnection `json:"channelConnections,omitempty"`
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
}
