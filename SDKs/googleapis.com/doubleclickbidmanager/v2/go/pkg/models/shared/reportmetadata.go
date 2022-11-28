package shared

// ReportMetadata
// Report metadata.
type ReportMetadata struct {
	GoogleCloudStoragePath *string       `json:"googleCloudStoragePath,omitempty"`
	ReportDataEndDate      *Date         `json:"reportDataEndDate,omitempty"`
	ReportDataStartDate    *Date         `json:"reportDataStartDate,omitempty"`
	Status                 *ReportStatus `json:"status,omitempty"`
}
