package shared

type GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum string

const (
	GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnumWriteDispositionUnspecified GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum = "WRITE_DISPOSITION_UNSPECIFIED"
	GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnumWriteEmpty                  GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum = "WRITE_EMPTY"
	GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnumWriteTruncate               GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum = "WRITE_TRUNCATE"
	GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnumWriteAppend                 GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum = "WRITE_APPEND"
)

type GoogleCloudHealthcareV1beta1FhirBigQueryDestination struct {
	DatasetURI       *string                                                                  `json:"datasetUri"`
	Force            *bool                                                                    `json:"force"`
	SchemaConfig     *SchemaConfig                                                            `json:"schemaConfig"`
	WriteDisposition *GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum `json:"writeDisposition"`
}
