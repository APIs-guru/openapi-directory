package shared

// NamedRanges
// A collection of all the NamedRanges in the document that share a given name.
type NamedRanges struct {
	Name        *string      `json:"name,omitempty"`
	NamedRanges []NamedRange `json:"namedRanges,omitempty"`
}
