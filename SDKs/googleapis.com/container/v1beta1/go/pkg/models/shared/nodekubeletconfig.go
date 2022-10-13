package shared

type NodeKubeletConfig struct {
	CPUCfsQuota       *bool   `json:"cpuCfsQuota"`
	CPUCfsQuotaPeriod *string `json:"cpuCfsQuotaPeriod"`
	CPUManagerPolicy  *string `json:"cpuManagerPolicy"`
	PodPidsLimit      *string `json:"podPidsLimit"`
}
