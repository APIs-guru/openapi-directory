package shared

type WorkloadMetadataConfigModeEnum string

const (
	WorkloadMetadataConfigModeEnumModeUnspecified WorkloadMetadataConfigModeEnum = "MODE_UNSPECIFIED"
	WorkloadMetadataConfigModeEnumGceMetadata     WorkloadMetadataConfigModeEnum = "GCE_METADATA"
	WorkloadMetadataConfigModeEnumGkeMetadata     WorkloadMetadataConfigModeEnum = "GKE_METADATA"
)

type WorkloadMetadataConfigNodeMetadataEnum string

const (
	WorkloadMetadataConfigNodeMetadataEnumUnspecified       WorkloadMetadataConfigNodeMetadataEnum = "UNSPECIFIED"
	WorkloadMetadataConfigNodeMetadataEnumSecure            WorkloadMetadataConfigNodeMetadataEnum = "SECURE"
	WorkloadMetadataConfigNodeMetadataEnumExpose            WorkloadMetadataConfigNodeMetadataEnum = "EXPOSE"
	WorkloadMetadataConfigNodeMetadataEnumGkeMetadataServer WorkloadMetadataConfigNodeMetadataEnum = "GKE_METADATA_SERVER"
)

// WorkloadMetadataConfig
// WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
type WorkloadMetadataConfig struct {
	Mode         *WorkloadMetadataConfigModeEnum         `json:"mode,omitempty"`
	NodeMetadata *WorkloadMetadataConfigNodeMetadataEnum `json:"nodeMetadata,omitempty"`
}
