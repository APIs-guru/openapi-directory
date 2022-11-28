package shared

// DeleteDuplicatesResponse
// The result of removing duplicates in a range.
type DeleteDuplicatesResponse struct {
	DuplicatesRemovedCount *int32 `json:"duplicatesRemovedCount,omitempty"`
}
