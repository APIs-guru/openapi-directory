package shared

// Detail
// Contains multiple sensitive information findings for each resource slice.
type Detail struct {
	Findings []Finding `json:"findings,omitempty"`
}
