package shared



type ResourceID struct {
    ChannelID *string `json:"channelId,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PlaylistID *string `json:"playlistId,omitempty"`
    VideoID *string `json:"videoId,omitempty"`
    
}

