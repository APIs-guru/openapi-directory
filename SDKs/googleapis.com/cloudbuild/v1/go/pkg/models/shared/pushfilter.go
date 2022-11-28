package shared

// PushFilter
// Push contains filter properties for matching GitHub git pushes.
type PushFilter struct {
	Branch      *string `json:"branch,omitempty"`
	InvertRegex *bool   `json:"invertRegex,omitempty"`
	Tag         *string `json:"tag,omitempty"`
}
