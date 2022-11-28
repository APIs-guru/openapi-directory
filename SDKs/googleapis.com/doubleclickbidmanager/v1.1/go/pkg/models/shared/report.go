package shared

// Report
// Represents a report.
type Report struct {
	Key      *ReportKey      `json:"key,omitempty"`
	Metadata *ReportMetadata `json:"metadata,omitempty"`
	Params   *Parameters     `json:"params,omitempty"`
}
