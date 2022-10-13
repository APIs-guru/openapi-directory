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

type ParameterMetadata struct {
	CustomMetadata map[string]string               `json:"customMetadata"`
	HelpText       *string                         `json:"helpText"`
	IsOptional     *bool                           `json:"isOptional"`
	Label          *string                         `json:"label"`
	Name           *string                         `json:"name"`
	ParamType      *ParameterMetadataParamTypeEnum `json:"paramType"`
	Regexes        []string                        `json:"regexes"`
}
