package shared

type WorkloadConfigAuditModeEnum string

const (
	WorkloadConfigAuditModeEnumModeUnspecified WorkloadConfigAuditModeEnum = "MODE_UNSPECIFIED"
	WorkloadConfigAuditModeEnumDisabled        WorkloadConfigAuditModeEnum = "DISABLED"
	WorkloadConfigAuditModeEnumBasic           WorkloadConfigAuditModeEnum = "BASIC"
	WorkloadConfigAuditModeEnumBaseline        WorkloadConfigAuditModeEnum = "BASELINE"
	WorkloadConfigAuditModeEnumRestricted      WorkloadConfigAuditModeEnum = "RESTRICTED"
)

// WorkloadConfig
// WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster.
type WorkloadConfig struct {
	AuditMode *WorkloadConfigAuditModeEnum `json:"auditMode,omitempty"`
}
