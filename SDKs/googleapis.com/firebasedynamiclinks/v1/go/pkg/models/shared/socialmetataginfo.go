package shared

// SocialMetaTagInfo
// Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
type SocialMetaTagInfo struct {
	SocialDescription *string `json:"socialDescription,omitempty"`
	SocialImageLink   *string `json:"socialImageLink,omitempty"`
	SocialTitle       *string `json:"socialTitle,omitempty"`
}
