package shared

type ListChannelConnectionsResponse struct {
	ChannelConnections []ChannelConnection `json:"channelConnections"`
	NextPageToken      *string             `json:"nextPageToken"`
	Unreachable        []string            `json:"unreachable"`
}
