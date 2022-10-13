package shared

type PushFilter struct {
	Branch      *string `json:"branch"`
	InvertRegex *bool   `json:"invertRegex"`
	Tag         *string `json:"tag"`
}
