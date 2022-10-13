package shared

type ReportMetadata struct {
	GoogleCloudStoragePath *string       `json:"googleCloudStoragePath"`
	ReportDataEndTimeMs    *string       `json:"reportDataEndTimeMs"`
	ReportDataStartTimeMs  *string       `json:"reportDataStartTimeMs"`
	Status                 *ReportStatus `json:"status"`
}
