package shared



type PlaylistsResponsePlaylists struct {
    Description *string `json:"description,omitempty"`
    EpisodeCount *int64 `json:"episode_count,omitempty"`
    ID *string `json:"id,omitempty"`
    Image *string `json:"image,omitempty"`
    LastTimestampMs *int64 `json:"last_timestamp_ms,omitempty"`
    ListennotesURL *string `json:"listennotes_url,omitempty"`
    Name *string `json:"name,omitempty"`
    PodcastCount *int64 `json:"podcast_count,omitempty"`
    Thumbnail *string `json:"thumbnail,omitempty"`
    Visibility *PlaylistVisibilityFieldEnum `json:"visibility,omitempty"`
    
}

