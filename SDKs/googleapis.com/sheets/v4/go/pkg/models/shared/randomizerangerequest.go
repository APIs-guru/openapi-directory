package shared

// RandomizeRangeRequest
// Randomizes the order of the rows in a range.
type RandomizeRangeRequest struct {
	Range *GridRange `json:"range,omitempty"`
}
