package shared

// SkippableSetting
// Skippable Settings
type SkippableSetting struct {
	Kind           *string      `json:"kind,omitempty"`
	ProgressOffset *VideoOffset `json:"progressOffset,omitempty"`
	SkipOffset     *VideoOffset `json:"skipOffset,omitempty"`
	Skippable      *bool        `json:"skippable,omitempty"`
}
