package shared

// VideoLocalization
// Localized versions of certain video properties (e.g. title).
type VideoLocalization struct {
	Description *string `json:"description,omitempty"`
	Title       *string `json:"title,omitempty"`
}
