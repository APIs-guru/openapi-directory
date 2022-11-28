package shared

// UpdateProtectedRangeRequest
// Updates an existing protected range with the specified protectedRangeId.
type UpdateProtectedRangeRequest struct {
	Fields         *string         `json:"fields,omitempty"`
	ProtectedRange *ProtectedRange `json:"protectedRange,omitempty"`
}
