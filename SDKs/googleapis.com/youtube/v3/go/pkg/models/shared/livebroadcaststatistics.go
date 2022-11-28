package shared

// LiveBroadcastStatistics
// Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
type LiveBroadcastStatistics struct {
	ConcurrentViewers *string `json:"concurrentViewers,omitempty"`
	TotalChatCount    *string `json:"totalChatCount,omitempty"`
}
