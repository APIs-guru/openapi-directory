package shared

// SasPortalDpaMoveList
// An entry in a DPA's move list.
type SasPortalDpaMoveList struct {
	DpaID          *string                  `json:"dpaId,omitempty"`
	FrequencyRange *SasPortalFrequencyRange `json:"frequencyRange,omitempty"`
}
