package shared

type APIUsageHistoryOut struct {
	DetailedUsage []APICounterV2Out `json:"detailedUsage"`
}
