package shared

type ReportMetadata struct {
	GoogleCloudStoragePath *string       `json:"googleCloudStoragePath"`
	ReportDataEndDate      *Date         `json:"reportDataEndDate"`
	ReportDataStartDate    *Date         `json:"reportDataStartDate"`
	Status                 *ReportStatus `json:"status"`
}
