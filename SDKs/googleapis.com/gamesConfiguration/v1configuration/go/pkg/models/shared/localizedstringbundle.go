package shared

type LocalizedStringBundle struct {
	Kind         *string           `json:"kind,omitempty"`
	Translations []LocalizedString `json:"translations,omitempty"`
}
