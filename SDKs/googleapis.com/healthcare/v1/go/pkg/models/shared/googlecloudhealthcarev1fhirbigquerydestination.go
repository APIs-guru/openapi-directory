package shared

type GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum string

const (
	GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnumWriteDispositionUnspecified GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum = "WRITE_DISPOSITION_UNSPECIFIED"
	GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnumWriteEmpty                  GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum = "WRITE_EMPTY"
	GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnumWriteTruncate               GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum = "WRITE_TRUNCATE"
	GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnumWriteAppend                 GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum = "WRITE_APPEND"
)

type GoogleCloudHealthcareV1FhirBigQueryDestination struct {
	DatasetURI       *string                                                             `json:"datasetUri"`
	Force            *bool                                                               `json:"force"`
	SchemaConfig     *SchemaConfig                                                       `json:"schemaConfig"`
	WriteDisposition *GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum `json:"writeDisposition"`
}
