package shared

type GoogleChromeManagementV1StorageStatusReport struct {
	Disk       []GoogleChromeManagementV1DiskInfo `json:"disk,omitempty"`
	ReportTime *string                            `json:"reportTime,omitempty"`
}
