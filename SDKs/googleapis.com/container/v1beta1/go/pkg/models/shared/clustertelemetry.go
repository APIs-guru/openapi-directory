package shared

type ClusterTelemetryTypeEnum string

const (
	ClusterTelemetryTypeEnumUnspecified ClusterTelemetryTypeEnum = "UNSPECIFIED"
	ClusterTelemetryTypeEnumDisabled    ClusterTelemetryTypeEnum = "DISABLED"
	ClusterTelemetryTypeEnumEnabled     ClusterTelemetryTypeEnum = "ENABLED"
	ClusterTelemetryTypeEnumSystemOnly  ClusterTelemetryTypeEnum = "SYSTEM_ONLY"
)

// ClusterTelemetry
// Telemetry integration for the cluster.
type ClusterTelemetry struct {
	Type *ClusterTelemetryTypeEnum `json:"type,omitempty"`
}
