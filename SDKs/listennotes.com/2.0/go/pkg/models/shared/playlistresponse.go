package shared




type PlaylistResponseTypeEnum string

const (
    PlaylistResponseTypeEnumEpisodeList PlaylistResponseTypeEnum = "episode_list"
PlaylistResponseTypeEnumPodcastList PlaylistResponseTypeEnum = "podcast_list"
)


type PlaylistResponse struct {
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Image *string `json:"image,omitempty"`
    Items []PlaylistItem `json:"items,omitempty"`
    LastTimestampMs *int64 `json:"last_timestamp_ms,omitempty"`
    ListennotesURL *string `json:"listennotes_url,omitempty"`
    Name *string `json:"name,omitempty"`
    Thumbnail *string `json:"thumbnail,omitempty"`
    Total *int64 `json:"total,omitempty"`
    Type *PlaylistResponseTypeEnum `json:"type,omitempty"`
    Visibility *PlaylistVisibilityFieldEnum `json:"visibility,omitempty"`
    
}

