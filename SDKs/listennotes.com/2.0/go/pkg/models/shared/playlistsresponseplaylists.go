package shared

type PlaylistsResponsePlaylists struct {
	Description     *string                      `json:"description"`
	EpisodeCount    *int64                       `json:"episode_count"`
	ID              *string                      `json:"id"`
	Image           *string                      `json:"image"`
	LastTimestampMs *int64                       `json:"last_timestamp_ms"`
	ListennotesURL  *string                      `json:"listennotes_url"`
	Name            *string                      `json:"name"`
	PodcastCount    *int64                       `json:"podcast_count"`
	Thumbnail       *string                      `json:"thumbnail"`
	Visibility      *PlaylistVisibilityFieldEnum `json:"visibility"`
}
