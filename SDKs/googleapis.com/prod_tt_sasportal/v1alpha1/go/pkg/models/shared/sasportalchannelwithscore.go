package shared



type SasPortalChannelWithScore struct {
    FrequencyRange *SasPortalFrequencyRange `json:"frequencyRange,omitempty"`
    Score *float64 `json:"score,omitempty"`
    
}

