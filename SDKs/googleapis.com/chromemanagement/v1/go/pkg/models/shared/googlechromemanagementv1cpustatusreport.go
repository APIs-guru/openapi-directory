package shared



type GoogleChromeManagementV1CPUStatusReport struct {
    CPUTemperatureInfo []GoogleChromeManagementV1CPUTemperatureInfo `json:"cpuTemperatureInfo,omitempty"`
    CPUUtilizationPct *int32 `json:"cpuUtilizationPct,omitempty"`
    ReportTime *string `json:"reportTime,omitempty"`
    SampleFrequency *string `json:"sampleFrequency,omitempty"`
    
}

