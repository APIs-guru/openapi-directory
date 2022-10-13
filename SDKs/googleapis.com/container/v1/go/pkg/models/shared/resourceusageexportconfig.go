package shared

type ResourceUsageExportConfig struct {
	BigqueryDestination         *BigQueryDestination       `json:"bigqueryDestination"`
	ConsumptionMeteringConfig   *ConsumptionMeteringConfig `json:"consumptionMeteringConfig"`
	EnableNetworkEgressMetering *bool                      `json:"enableNetworkEgressMetering"`
}
