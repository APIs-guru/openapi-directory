package shared

// ListChannelsResponse
// Response message for ListChannels.
type ListChannelsResponse struct {
	Channels      []Channel `json:"channels,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
