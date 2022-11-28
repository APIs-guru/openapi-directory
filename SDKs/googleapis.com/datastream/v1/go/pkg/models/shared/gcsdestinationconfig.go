package shared

// GcsDestinationConfig
// Google Cloud Storage destination configuration
type GcsDestinationConfig struct {
	AvroFileFormat       map[string]interface{} `json:"avroFileFormat,omitempty"`
	FileRotationInterval *string                `json:"fileRotationInterval,omitempty"`
	FileRotationMb       *int32                 `json:"fileRotationMb,omitempty"`
	JSONFileFormat       *JSONFileFormat        `json:"jsonFileFormat,omitempty"`
	Path                 *string                `json:"path,omitempty"`
}
