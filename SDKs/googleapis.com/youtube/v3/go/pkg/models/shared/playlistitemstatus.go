package shared




type PlaylistItemStatusPrivacyStatusEnum string

const (
    PlaylistItemStatusPrivacyStatusEnumPublic PlaylistItemStatusPrivacyStatusEnum = "public"
PlaylistItemStatusPrivacyStatusEnumUnlisted PlaylistItemStatusPrivacyStatusEnum = "unlisted"
PlaylistItemStatusPrivacyStatusEnumPrivate PlaylistItemStatusPrivacyStatusEnum = "private"
)


type PlaylistItemStatus struct {
    PrivacyStatus *PlaylistItemStatusPrivacyStatusEnum `json:"privacyStatus,omitempty"`
    
}

