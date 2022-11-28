package shared

// GooglePrivacyDlpV2HybridInspectStatistics
// Statistics related to processing hybrid inspect requests.
type GooglePrivacyDlpV2HybridInspectStatistics struct {
	AbortedCount   *string `json:"abortedCount,omitempty"`
	PendingCount   *string `json:"pendingCount,omitempty"`
	ProcessedCount *string `json:"processedCount,omitempty"`
}
