package shared

// LocalizedString
// A localized string resource.
type LocalizedString struct {
	Kind   *string `json:"kind,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Value  *string `json:"value,omitempty"`
}
