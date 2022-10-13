package shared

type URLNotificationMetadata struct {
	LatestRemove *URLNotification `json:"latestRemove"`
	LatestUpdate *URLNotification `json:"latestUpdate"`
	URL          *string          `json:"url"`
}
