package shared

type ResourceUsageExportConfig struct {
	BigqueryDestination         *BigQueryDestination       `json:"bigqueryDestination,omitempty"`
	ConsumptionMeteringConfig   *ConsumptionMeteringConfig `json:"consumptionMeteringConfig,omitempty"`
	EnableNetworkEgressMetering *bool                      `json:"enableNetworkEgressMetering,omitempty"`
}
