package shared

// LocalizedStringBundle
// A localized string bundle resource.
type LocalizedStringBundle struct {
	Kind         *string           `json:"kind,omitempty"`
	Translations []LocalizedString `json:"translations,omitempty"`
}
