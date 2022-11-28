package shared

// ConversionCountingConfig
// Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.
type ConversionCountingConfig struct {
	FloodlightActivityConfigs     []TrackingFloodlightActivityConfig `json:"floodlightActivityConfigs,omitempty"`
	PostViewCountPercentageMillis *string                            `json:"postViewCountPercentageMillis,omitempty"`
}
