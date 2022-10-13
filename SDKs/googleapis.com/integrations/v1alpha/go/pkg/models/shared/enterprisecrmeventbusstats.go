package shared

type EnterpriseCrmEventbusStats struct {
	Dimensions        *EnterpriseCrmEventbusStatsDimensions `json:"dimensions"`
	DurationInSeconds *float64                              `json:"durationInSeconds"`
	ErrorRate         *float64                              `json:"errorRate"`
	QPS               *float64                              `json:"qps"`
	WarningRate       *float64                              `json:"warningRate"`
}
