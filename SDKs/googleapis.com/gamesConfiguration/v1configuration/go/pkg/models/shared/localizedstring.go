package shared

type LocalizedString struct {
	Kind   *string `json:"kind"`
	Locale *string `json:"locale"`
	Value  *string `json:"value"`
}
