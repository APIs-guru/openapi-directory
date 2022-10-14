package shared

type NodeKubeletConfig struct {
	CPUCfsQuota       *bool   `json:"cpuCfsQuota,omitempty"`
	CPUCfsQuotaPeriod *string `json:"cpuCfsQuotaPeriod,omitempty"`
	CPUManagerPolicy  *string `json:"cpuManagerPolicy,omitempty"`
	PodPidsLimit      *string `json:"podPidsLimit,omitempty"`
}
