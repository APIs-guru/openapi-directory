package shared

type GcsDestinationConfigGcsFileFormatEnum string

const (
	GcsDestinationConfigGcsFileFormatEnumGcsFileFormatUnspecified GcsDestinationConfigGcsFileFormatEnum = "GCS_FILE_FORMAT_UNSPECIFIED"
	GcsDestinationConfigGcsFileFormatEnumAvro                     GcsDestinationConfigGcsFileFormatEnum = "AVRO"
)

type GcsDestinationConfig struct {
	AvroFileFormat       map[string]interface{}                 `json:"avroFileFormat"`
	FileRotationInterval *string                                `json:"fileRotationInterval"`
	FileRotationMb       *int32                                 `json:"fileRotationMb"`
	GcsFileFormat        *GcsDestinationConfigGcsFileFormatEnum `json:"gcsFileFormat"`
	JSONFileFormat       *JSONFileFormat                        `json:"jsonFileFormat"`
	Path                 *string                                `json:"path"`
}
