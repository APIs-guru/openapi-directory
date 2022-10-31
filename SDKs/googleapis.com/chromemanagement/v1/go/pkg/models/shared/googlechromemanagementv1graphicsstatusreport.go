package shared

type GoogleChromeManagementV1GraphicsStatusReport struct {
	Displays   []GoogleChromeManagementV1DisplayInfo `json:"displays,omitempty"`
	ReportTime *string                               `json:"reportTime,omitempty"`
}
