package shared



type ListChannelsResponse struct {
    Channels []Channel `json:"channels,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

