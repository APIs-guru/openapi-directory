package shared

// UpdateNamedRangeRequest
// Updates properties of the named range with the specified namedRangeId.
type UpdateNamedRangeRequest struct {
	Fields     *string     `json:"fields,omitempty"`
	NamedRange *NamedRange `json:"namedRange,omitempty"`
}
