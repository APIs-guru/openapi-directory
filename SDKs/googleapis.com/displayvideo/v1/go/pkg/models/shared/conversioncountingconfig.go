package shared

type ConversionCountingConfig struct {
	FloodlightActivityConfigs     []TrackingFloodlightActivityConfig `json:"floodlightActivityConfigs"`
	PostViewCountPercentageMillis *string                            `json:"postViewCountPercentageMillis"`
}
