package shared

type ProtectConfigWorkloadVulnerabilityModeEnum string

const (
	ProtectConfigWorkloadVulnerabilityModeEnumWorkloadVulnerabilityModeUnspecified ProtectConfigWorkloadVulnerabilityModeEnum = "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
	ProtectConfigWorkloadVulnerabilityModeEnumDisabled                             ProtectConfigWorkloadVulnerabilityModeEnum = "DISABLED"
	ProtectConfigWorkloadVulnerabilityModeEnumBasic                                ProtectConfigWorkloadVulnerabilityModeEnum = "BASIC"
)

type ProtectConfig struct {
	WorkloadConfig            *WorkloadConfig                             `json:"workloadConfig,omitempty"`
	WorkloadVulnerabilityMode *ProtectConfigWorkloadVulnerabilityModeEnum `json:"workloadVulnerabilityMode,omitempty"`
}
