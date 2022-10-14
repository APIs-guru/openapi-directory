package shared

type NamedRanges struct {
	Name        *string      `json:"name,omitempty"`
	NamedRanges []NamedRange `json:"namedRanges,omitempty"`
}
