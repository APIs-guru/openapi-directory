package shared

type ListMatcher struct {
	OneOf *ValueMatcher `json:"oneOf,omitempty"`
}
