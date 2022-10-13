package shared

type SasPortalChannelWithScore struct {
	FrequencyRange *SasPortalFrequencyRange `json:"frequencyRange"`
	Score          *float64                 `json:"score"`
}
