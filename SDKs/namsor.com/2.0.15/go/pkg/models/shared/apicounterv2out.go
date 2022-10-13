package shared

type APICounterV2Out struct {
	APIKey               *APIKeyOut       `json:"apiKey"`
	APIService           *string          `json:"apiService"`
	CreatedDateTime      *int64           `json:"createdDateTime"`
	LastFlushedDateTime  *int64           `json:"lastFlushedDateTime"`
	LastUsedDateTime     *int64           `json:"lastUsedDateTime"`
	ServiceFeaturesUsage map[string]int64 `json:"serviceFeaturesUsage"`
	TotalUsage           *int64           `json:"totalUsage"`
}
