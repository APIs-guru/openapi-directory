package shared

type URLNotificationMetadata struct {
	LatestRemove *URLNotification `json:"latestRemove,omitempty"`
	LatestUpdate *URLNotification `json:"latestUpdate,omitempty"`
	URL          *string          `json:"url,omitempty"`
}
