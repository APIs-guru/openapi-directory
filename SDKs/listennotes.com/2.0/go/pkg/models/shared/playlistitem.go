package shared

type PlaylistItemTypeEnum string

const (
	PlaylistItemTypeEnumEpisode     PlaylistItemTypeEnum = "episode"
	PlaylistItemTypeEnumCustomAudio PlaylistItemTypeEnum = "custom_audio"
	PlaylistItemTypeEnumPodcast     PlaylistItemTypeEnum = "podcast"
)

type PlaylistItem struct {
	AddedAtMs *int64                `json:"added_at_ms"`
	Data      *interface{}          `json:"data"`
	ID        *int64                `json:"id"`
	Notes     *string               `json:"notes"`
	Type      *PlaylistItemTypeEnum `json:"type"`
}
