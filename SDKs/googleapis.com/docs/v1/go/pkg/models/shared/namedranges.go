package shared

type NamedRanges struct {
	Name        *string      `json:"name"`
	NamedRanges []NamedRange `json:"namedRanges"`
}
