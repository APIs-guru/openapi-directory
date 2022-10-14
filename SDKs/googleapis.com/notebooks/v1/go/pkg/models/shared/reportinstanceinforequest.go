package shared

type ReportInstanceInfoRequest struct {
	Metadata map[string]string `json:"metadata,omitempty"`
	VMID     *string           `json:"vmId,omitempty"`
}
