package shared

// FailedData
// Further data for the failed state.
type FailedData struct {
	Error *Status `json:"error,omitempty"`
}
