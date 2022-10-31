package shared



type ChannelResponse struct {
    ID *string `json:"id,omitempty"`
    IsBroadcastOnly *bool `json:"isBroadcastOnly,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

