package shared

type PlaylistItemTypeEnum string

const (
	PlaylistItemTypeEnumEpisode     PlaylistItemTypeEnum = "episode"
	PlaylistItemTypeEnumCustomAudio PlaylistItemTypeEnum = "custom_audio"
	PlaylistItemTypeEnumPodcast     PlaylistItemTypeEnum = "podcast"
)

// PlaylistItem
// An item in a playlist
type PlaylistItem struct {
	AddedAtMs *int64                `json:"added_at_ms,omitempty"`
	Data      *interface{}          `json:"data,omitempty"`
	ID        *int64                `json:"id,omitempty"`
	Notes     *string               `json:"notes,omitempty"`
	Type      *PlaylistItemTypeEnum `json:"type,omitempty"`
}
