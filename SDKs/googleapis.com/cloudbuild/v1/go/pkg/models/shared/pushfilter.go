package shared

type PushFilter struct {
	Branch      *string `json:"branch,omitempty"`
	InvertRegex *bool   `json:"invertRegex,omitempty"`
	Tag         *string `json:"tag,omitempty"`
}
