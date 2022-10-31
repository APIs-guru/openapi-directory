package shared

type LocalizedString struct {
	Kind   *string `json:"kind,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Value  *string `json:"value,omitempty"`
}
