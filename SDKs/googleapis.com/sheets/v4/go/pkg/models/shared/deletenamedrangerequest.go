package shared

// DeleteNamedRangeRequest
// Removes the named range with the given ID from the spreadsheet.
type DeleteNamedRangeRequest struct {
	NamedRangeID *string `json:"namedRangeId,omitempty"`
}
