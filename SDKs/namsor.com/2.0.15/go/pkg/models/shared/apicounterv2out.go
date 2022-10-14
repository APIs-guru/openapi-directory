package shared

type APICounterV2Out struct {
	APIKey               *APIKeyOut       `json:"apiKey,omitempty"`
	APIService           *string          `json:"apiService,omitempty"`
	CreatedDateTime      *int64           `json:"createdDateTime,omitempty"`
	LastFlushedDateTime  *int64           `json:"lastFlushedDateTime,omitempty"`
	LastUsedDateTime     *int64           `json:"lastUsedDateTime,omitempty"`
	ServiceFeaturesUsage map[string]int64 `json:"serviceFeaturesUsage,omitempty"`
	TotalUsage           *int64           `json:"totalUsage,omitempty"`
}
