package shared

type MemInfo struct {
	CurrentLimitBytes *string `json:"currentLimitBytes"`
	CurrentOoms       *string `json:"currentOoms"`
	CurrentRssBytes   *string `json:"currentRssBytes"`
	Timestamp         *string `json:"timestamp"`
	TotalGbMs         *string `json:"totalGbMs"`
}
