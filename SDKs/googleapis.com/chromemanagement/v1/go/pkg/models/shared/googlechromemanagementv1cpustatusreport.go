package shared

type GoogleChromeManagementV1CPUStatusReport struct {
	CPUTemperatureInfo []GoogleChromeManagementV1CPUTemperatureInfo `json:"cpuTemperatureInfo"`
	CPUUtilizationPct  *int32                                       `json:"cpuUtilizationPct"`
	ReportTime         *string                                      `json:"reportTime"`
	SampleFrequency    *string                                      `json:"sampleFrequency"`
}
