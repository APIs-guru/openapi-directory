package shared

// ListMatcher
// Specifies the way to match a list value.
type ListMatcher struct {
	OneOf *ValueMatcher `json:"oneOf,omitempty"`
}
