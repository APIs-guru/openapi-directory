package shared

type ParameterMetadataParamTypeEnum string

const (
	ParameterMetadataParamTypeEnumDefault            ParameterMetadataParamTypeEnum = "DEFAULT"
	ParameterMetadataParamTypeEnumText               ParameterMetadataParamTypeEnum = "TEXT"
	ParameterMetadataParamTypeEnumGcsReadBucket      ParameterMetadataParamTypeEnum = "GCS_READ_BUCKET"
	ParameterMetadataParamTypeEnumGcsWriteBucket     ParameterMetadataParamTypeEnum = "GCS_WRITE_BUCKET"
	ParameterMetadataParamTypeEnumGcsReadFile        ParameterMetadataParamTypeEnum = "GCS_READ_FILE"
	ParameterMetadataParamTypeEnumGcsWriteFile       ParameterMetadataParamTypeEnum = "GCS_WRITE_FILE"
	ParameterMetadataParamTypeEnumGcsReadFolder      ParameterMetadataParamTypeEnum = "GCS_READ_FOLDER"
	ParameterMetadataParamTypeEnumGcsWriteFolder     ParameterMetadataParamTypeEnum = "GCS_WRITE_FOLDER"
	ParameterMetadataParamTypeEnumPubsubTopic        ParameterMetadataParamTypeEnum = "PUBSUB_TOPIC"
	ParameterMetadataParamTypeEnumPubsubSubscription ParameterMetadataParamTypeEnum = "PUBSUB_SUBSCRIPTION"
)

// ParameterMetadata
// Metadata for a specific parameter.
type ParameterMetadata struct {
	CustomMetadata map[string]string               `json:"customMetadata,omitempty"`
	HelpText       *string                         `json:"helpText,omitempty"`
	IsOptional     *bool                           `json:"isOptional,omitempty"`
	Label          *string                         `json:"label,omitempty"`
	Name           *string                         `json:"name,omitempty"`
	ParamType      *ParameterMetadataParamTypeEnum `json:"paramType,omitempty"`
	Regexes        []string                        `json:"regexes,omitempty"`
}
