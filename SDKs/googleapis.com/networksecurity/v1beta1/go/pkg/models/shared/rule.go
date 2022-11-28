package shared

// Rule
// Specification of rules.
type Rule struct {
	Destinations []Destination `json:"destinations,omitempty"`
	Sources      []Source      `json:"sources,omitempty"`
}
