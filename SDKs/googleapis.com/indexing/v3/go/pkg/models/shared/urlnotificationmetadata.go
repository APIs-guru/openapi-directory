package shared

// URLNotificationMetadata
// Summary of the most recent Indexing API notifications successfully received, for a given URL.
type URLNotificationMetadata struct {
	LatestRemove *URLNotification `json:"latestRemove,omitempty"`
	LatestUpdate *URLNotification `json:"latestUpdate,omitempty"`
	URL          *string          `json:"url,omitempty"`
}
