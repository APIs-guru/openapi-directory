package shared

type PlaylistItemStatusPrivacyStatusEnum string

const (
	PlaylistItemStatusPrivacyStatusEnumPublic   PlaylistItemStatusPrivacyStatusEnum = "public"
	PlaylistItemStatusPrivacyStatusEnumUnlisted PlaylistItemStatusPrivacyStatusEnum = "unlisted"
	PlaylistItemStatusPrivacyStatusEnumPrivate  PlaylistItemStatusPrivacyStatusEnum = "private"
)

// PlaylistItemStatus
// Information about the playlist item's privacy status.
type PlaylistItemStatus struct {
	PrivacyStatus *PlaylistItemStatusPrivacyStatusEnum `json:"privacyStatus,omitempty"`
}
