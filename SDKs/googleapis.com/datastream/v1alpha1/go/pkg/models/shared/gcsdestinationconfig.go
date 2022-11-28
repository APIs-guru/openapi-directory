package shared

type GcsDestinationConfigGcsFileFormatEnum string

const (
	GcsDestinationConfigGcsFileFormatEnumGcsFileFormatUnspecified GcsDestinationConfigGcsFileFormatEnum = "GCS_FILE_FORMAT_UNSPECIFIED"
	GcsDestinationConfigGcsFileFormatEnumAvro                     GcsDestinationConfigGcsFileFormatEnum = "AVRO"
)

// GcsDestinationConfig
// Google Cloud Storage destination configuration
type GcsDestinationConfig struct {
	AvroFileFormat       map[string]interface{}                 `json:"avroFileFormat,omitempty"`
	FileRotationInterval *string                                `json:"fileRotationInterval,omitempty"`
	FileRotationMb       *int32                                 `json:"fileRotationMb,omitempty"`
	GcsFileFormat        *GcsDestinationConfigGcsFileFormatEnum `json:"gcsFileFormat,omitempty"`
	JSONFileFormat       *JSONFileFormat                        `json:"jsonFileFormat,omitempty"`
	Path                 *string                                `json:"path,omitempty"`
}
