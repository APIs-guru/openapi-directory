package shared

type LiveBroadcastStatistics struct {
	ConcurrentViewers *string `json:"concurrentViewers"`
	TotalChatCount    *string `json:"totalChatCount"`
}
