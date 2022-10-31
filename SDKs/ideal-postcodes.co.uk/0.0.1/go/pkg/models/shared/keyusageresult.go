package shared

type KeyUsageResult struct {
	DailyCount []KeyUsageDailyCountEpoch `json:"dailyCount,omitempty"`
	End        *string                   `json:"end,omitempty"`
	Start      *string                   `json:"start,omitempty"`
	Total      *int32                    `json:"total,omitempty"`
}
