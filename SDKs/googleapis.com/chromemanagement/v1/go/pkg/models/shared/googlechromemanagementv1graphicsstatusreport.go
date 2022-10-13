package shared

type GoogleChromeManagementV1GraphicsStatusReport struct {
	Displays   []GoogleChromeManagementV1DisplayInfo `json:"displays"`
	ReportTime *string                               `json:"reportTime"`
}
