package shared

type LocalizedString struct {
	Language *string `json:"language"`
	Value    *string `json:"value"`
}
