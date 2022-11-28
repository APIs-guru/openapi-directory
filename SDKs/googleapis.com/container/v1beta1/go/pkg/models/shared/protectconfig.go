package shared

type ProtectConfigWorkloadVulnerabilityModeEnum string

const (
	ProtectConfigWorkloadVulnerabilityModeEnumWorkloadVulnerabilityModeUnspecified ProtectConfigWorkloadVulnerabilityModeEnum = "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
	ProtectConfigWorkloadVulnerabilityModeEnumDisabled                             ProtectConfigWorkloadVulnerabilityModeEnum = "DISABLED"
	ProtectConfigWorkloadVulnerabilityModeEnumBasic                                ProtectConfigWorkloadVulnerabilityModeEnum = "BASIC"
)

// ProtectConfig
// ProtectConfig defines the flags needed to enable/disable features for the Protect API.
type ProtectConfig struct {
	WorkloadConfig            *WorkloadConfig                             `json:"workloadConfig,omitempty"`
	WorkloadVulnerabilityMode *ProtectConfigWorkloadVulnerabilityModeEnum `json:"workloadVulnerabilityMode,omitempty"`
}
