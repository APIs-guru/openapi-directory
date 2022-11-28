package shared

// I18nRegionSnippet
// Basic details about an i18n region, such as region code and human-readable name.
type I18nRegionSnippet struct {
	Gl   *string `json:"gl,omitempty"`
	Name *string `json:"name,omitempty"`
}
