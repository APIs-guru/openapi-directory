package shared

// RunQueryRequest
// Request to run a stored query to generate a report.
type RunQueryRequest struct {
	DataRange *DataRange `json:"dataRange,omitempty"`
}
