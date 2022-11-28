package shared

// SiteSkippableSetting
// Skippable Settings
type SiteSkippableSetting struct {
	Kind           *string      `json:"kind,omitempty"`
	ProgressOffset *VideoOffset `json:"progressOffset,omitempty"`
	SkipOffset     *VideoOffset `json:"skipOffset,omitempty"`
	Skippable      *bool        `json:"skippable,omitempty"`
}
