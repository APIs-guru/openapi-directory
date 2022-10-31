package shared




type WorkloadMetadataConfigModeEnum string

const (
    WorkloadMetadataConfigModeEnumModeUnspecified WorkloadMetadataConfigModeEnum = "MODE_UNSPECIFIED"
WorkloadMetadataConfigModeEnumGceMetadata WorkloadMetadataConfigModeEnum = "GCE_METADATA"
WorkloadMetadataConfigModeEnumGkeMetadata WorkloadMetadataConfigModeEnum = "GKE_METADATA"
)


type WorkloadMetadataConfig struct {
    Mode *WorkloadMetadataConfigModeEnum `json:"mode,omitempty"`
    
}

