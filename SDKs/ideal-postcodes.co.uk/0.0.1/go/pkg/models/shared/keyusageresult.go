package shared

type KeyUsageResult struct {
	DailyCount []KeyUsageDailyCountEpoch `json:"dailyCount"`
	End        *string                   `json:"end"`
	Start      *string                   `json:"start"`
	Total      *int32                    `json:"total"`
}
