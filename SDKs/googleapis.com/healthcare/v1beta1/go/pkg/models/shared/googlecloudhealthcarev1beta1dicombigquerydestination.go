package shared

type GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum string

const (
	GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnumWriteDispositionUnspecified GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum = "WRITE_DISPOSITION_UNSPECIFIED"
	GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnumWriteEmpty                  GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum = "WRITE_EMPTY"
	GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnumWriteTruncate               GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum = "WRITE_TRUNCATE"
	GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnumWriteAppend                 GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum = "WRITE_APPEND"
)

// GoogleCloudHealthcareV1beta1DicomBigQueryDestination
// The BigQuery table where the server writes output.
type GoogleCloudHealthcareV1beta1DicomBigQueryDestination struct {
	Force            *bool                                                                     `json:"force,omitempty"`
	TableURI         *string                                                                   `json:"tableUri,omitempty"`
	WriteDisposition *GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum `json:"writeDisposition,omitempty"`
}
