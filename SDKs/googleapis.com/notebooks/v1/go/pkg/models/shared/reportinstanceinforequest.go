package shared

type ReportInstanceInfoRequest struct {
	Metadata map[string]string `json:"metadata"`
	VMID     *string           `json:"vmId"`
}
