package shared

type SiteSkippableSetting struct {
	Kind           *string      `json:"kind"`
	ProgressOffset *VideoOffset `json:"progressOffset"`
	SkipOffset     *VideoOffset `json:"skipOffset"`
	Skippable      *bool        `json:"skippable"`
}
