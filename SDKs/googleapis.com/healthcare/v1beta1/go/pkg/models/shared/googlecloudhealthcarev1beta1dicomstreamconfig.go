package shared

// GoogleCloudHealthcareV1beta1DicomStreamConfig
// StreamConfig specifies configuration for a streaming DICOM export.
type GoogleCloudHealthcareV1beta1DicomStreamConfig struct {
	BigqueryDestination *GoogleCloudHealthcareV1beta1DicomBigQueryDestination `json:"bigqueryDestination,omitempty"`
}
