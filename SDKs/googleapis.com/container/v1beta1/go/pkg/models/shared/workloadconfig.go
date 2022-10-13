package shared

type WorkloadConfigAuditModeEnum string

const (
	WorkloadConfigAuditModeEnumModeUnspecified WorkloadConfigAuditModeEnum = "MODE_UNSPECIFIED"
	WorkloadConfigAuditModeEnumDisabled        WorkloadConfigAuditModeEnum = "DISABLED"
	WorkloadConfigAuditModeEnumBasic           WorkloadConfigAuditModeEnum = "BASIC"
	WorkloadConfigAuditModeEnumBaseline        WorkloadConfigAuditModeEnum = "BASELINE"
	WorkloadConfigAuditModeEnumRestricted      WorkloadConfigAuditModeEnum = "RESTRICTED"
)

type WorkloadConfig struct {
	AuditMode *WorkloadConfigAuditModeEnum `json:"auditMode"`
}
