package shared

type PlaylistResponseTypeEnum string

const (
	PlaylistResponseTypeEnumEpisodeList PlaylistResponseTypeEnum = "episode_list"
	PlaylistResponseTypeEnumPodcastList PlaylistResponseTypeEnum = "podcast_list"
)

type PlaylistResponse struct {
	Description     *string                      `json:"description"`
	ID              *string                      `json:"id"`
	Image           *string                      `json:"image"`
	Items           []PlaylistItem               `json:"items"`
	LastTimestampMs *int64                       `json:"last_timestamp_ms"`
	ListennotesURL  *string                      `json:"listennotes_url"`
	Name            *string                      `json:"name"`
	Thumbnail       *string                      `json:"thumbnail"`
	Total           *int64                       `json:"total"`
	Type            *PlaylistResponseTypeEnum    `json:"type"`
	Visibility      *PlaylistVisibilityFieldEnum `json:"visibility"`
}
