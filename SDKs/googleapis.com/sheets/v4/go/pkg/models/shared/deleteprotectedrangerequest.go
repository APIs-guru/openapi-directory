package shared

// DeleteProtectedRangeRequest
// Deletes the protected range with the given ID.
type DeleteProtectedRangeRequest struct {
	ProtectedRangeID *int32 `json:"protectedRangeId,omitempty"`
}
