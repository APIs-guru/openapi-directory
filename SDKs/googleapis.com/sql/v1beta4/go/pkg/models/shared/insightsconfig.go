package shared

type InsightsConfig struct {
	QueryInsightsEnabled  *bool  `json:"queryInsightsEnabled"`
	QueryPlansPerMinute   *int32 `json:"queryPlansPerMinute"`
	QueryStringLength     *int32 `json:"queryStringLength"`
	RecordApplicationTags *bool  `json:"recordApplicationTags"`
	RecordClientAddress   *bool  `json:"recordClientAddress"`
}
