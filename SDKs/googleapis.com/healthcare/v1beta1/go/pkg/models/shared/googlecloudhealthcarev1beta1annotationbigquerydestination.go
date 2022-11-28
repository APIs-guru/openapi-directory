package shared

type GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum string

const (
	GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnumSchemaTypeUnspecified GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum = "SCHEMA_TYPE_UNSPECIFIED"
	GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnumSimple                GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum = "SIMPLE"
)

type GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum string

const (
	GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnumWriteDispositionUnspecified GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum = "WRITE_DISPOSITION_UNSPECIFIED"
	GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnumWriteEmpty                  GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum = "WRITE_EMPTY"
	GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnumWriteTruncate               GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum = "WRITE_TRUNCATE"
	GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnumWriteAppend                 GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum = "WRITE_APPEND"
)

// GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination
// The BigQuery table for export.
type GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination struct {
	Force            *bool                                                                          `json:"force,omitempty"`
	SchemaType       *GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum       `json:"schemaType,omitempty"`
	TableURI         *string                                                                        `json:"tableUri,omitempty"`
	WriteDisposition *GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum `json:"writeDisposition,omitempty"`
}
