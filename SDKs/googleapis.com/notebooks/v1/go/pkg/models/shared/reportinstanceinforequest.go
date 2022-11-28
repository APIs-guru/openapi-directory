package shared

// ReportInstanceInfoRequest
// Request for notebook instances to report information to Notebooks API.
type ReportInstanceInfoRequest struct {
	Metadata map[string]string `json:"metadata,omitempty"`
	VMID     *string           `json:"vmId,omitempty"`
}
