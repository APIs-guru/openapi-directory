package shared

type GcsDestinationConfig struct {
	AvroFileFormat       map[string]interface{} `json:"avroFileFormat"`
	FileRotationInterval *string                `json:"fileRotationInterval"`
	FileRotationMb       *int32                 `json:"fileRotationMb"`
	JSONFileFormat       *JSONFileFormat        `json:"jsonFileFormat"`
	Path                 *string                `json:"path"`
}
