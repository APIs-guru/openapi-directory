package shared

type LocalizedStringBundle struct {
	Kind         *string           `json:"kind"`
	Translations []LocalizedString `json:"translations"`
}
