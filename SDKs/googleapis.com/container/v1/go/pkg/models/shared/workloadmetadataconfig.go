package shared

type WorkloadMetadataConfigModeEnum string

const (
	WorkloadMetadataConfigModeEnumModeUnspecified WorkloadMetadataConfigModeEnum = "MODE_UNSPECIFIED"
	WorkloadMetadataConfigModeEnumGceMetadata     WorkloadMetadataConfigModeEnum = "GCE_METADATA"
	WorkloadMetadataConfigModeEnumGkeMetadata     WorkloadMetadataConfigModeEnum = "GKE_METADATA"
)

// WorkloadMetadataConfig
// WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
type WorkloadMetadataConfig struct {
	Mode *WorkloadMetadataConfigModeEnum `json:"mode,omitempty"`
}
