package shared



type ReportMetadata struct {
    GoogleCloudStoragePath *string `json:"googleCloudStoragePath,omitempty"`
    ReportDataEndTimeMs *string `json:"reportDataEndTimeMs,omitempty"`
    ReportDataStartTimeMs *string `json:"reportDataStartTimeMs,omitempty"`
    Status *ReportStatus `json:"status,omitempty"`
    
}

