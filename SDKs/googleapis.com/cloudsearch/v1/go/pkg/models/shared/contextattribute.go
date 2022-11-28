package shared

// ContextAttribute
// A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request.
type ContextAttribute struct {
	Name   *string  `json:"name,omitempty"`
	Values []string `json:"values,omitempty"`
}
