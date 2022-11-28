package shared

// ReportKey
// Key used to identify a report.
type ReportKey struct {
	QueryID  *string `json:"queryId,omitempty"`
	ReportID *string `json:"reportId,omitempty"`
}
