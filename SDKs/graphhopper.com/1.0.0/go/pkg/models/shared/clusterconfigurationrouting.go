package shared

type ClusterConfigurationRouting struct {
	CostPerMeter  *float64 `json:"cost_per_meter"`
	CostPerSecond *float64 `json:"cost_per_second"`
	Profile       *string  `json:"profile"`
}
