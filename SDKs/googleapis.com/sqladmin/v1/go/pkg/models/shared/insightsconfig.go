package shared

// InsightsConfig
// Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
type InsightsConfig struct {
	QueryInsightsEnabled  *bool  `json:"queryInsightsEnabled,omitempty"`
	QueryPlansPerMinute   *int32 `json:"queryPlansPerMinute,omitempty"`
	QueryStringLength     *int32 `json:"queryStringLength,omitempty"`
	RecordApplicationTags *bool  `json:"recordApplicationTags,omitempty"`
	RecordClientAddress   *bool  `json:"recordClientAddress,omitempty"`
}
