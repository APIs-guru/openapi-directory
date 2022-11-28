package shared

// AddNamedRangeRequest
// Adds a named range to the spreadsheet.
type AddNamedRangeRequest struct {
	NamedRange *NamedRange `json:"namedRange,omitempty"`
}
