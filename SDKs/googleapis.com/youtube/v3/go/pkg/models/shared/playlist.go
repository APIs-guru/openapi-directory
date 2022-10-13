package shared

type Playlist struct {
	ContentDetails *PlaylistContentDetails         `json:"contentDetails"`
	Etag           *string                         `json:"etag"`
	ID             *string                         `json:"id"`
	Kind           *string                         `json:"kind"`
	Localizations  map[string]PlaylistLocalization `json:"localizations"`
	Player         *PlaylistPlayer                 `json:"player"`
	Snippet        *PlaylistSnippet                `json:"snippet"`
	Status         *PlaylistStatus                 `json:"status"`
}
