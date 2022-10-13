package shared

type GoogleChromeManagementV1StorageStatusReport struct {
	Disk       []GoogleChromeManagementV1DiskInfo `json:"disk"`
	ReportTime *string                            `json:"reportTime"`
}
