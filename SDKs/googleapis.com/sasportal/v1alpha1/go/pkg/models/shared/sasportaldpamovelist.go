package shared

type SasPortalDpaMoveList struct {
	DpaID          *string                  `json:"dpaId"`
	FrequencyRange *SasPortalFrequencyRange `json:"frequencyRange"`
}
