package shared

type PlaylistStatusPrivacyStatusEnum string

const (
	PlaylistStatusPrivacyStatusEnumPublic   PlaylistStatusPrivacyStatusEnum = "public"
	PlaylistStatusPrivacyStatusEnumUnlisted PlaylistStatusPrivacyStatusEnum = "unlisted"
	PlaylistStatusPrivacyStatusEnumPrivate  PlaylistStatusPrivacyStatusEnum = "private"
)

type PlaylistStatus struct {
	PrivacyStatus *PlaylistStatusPrivacyStatusEnum `json:"privacyStatus,omitempty"`
}
