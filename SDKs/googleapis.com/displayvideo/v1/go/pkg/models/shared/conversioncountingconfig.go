package shared

type ConversionCountingConfig struct {
	FloodlightActivityConfigs     []TrackingFloodlightActivityConfig `json:"floodlightActivityConfigs,omitempty"`
	PostViewCountPercentageMillis *string                            `json:"postViewCountPercentageMillis,omitempty"`
}
