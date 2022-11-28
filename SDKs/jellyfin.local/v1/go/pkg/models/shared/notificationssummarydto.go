package shared

// NotificationsSummaryDto
// The notification summary DTO.
type NotificationsSummaryDto struct {
	MaxUnreadNotificationLevel *NotificationLevelEnum `json:"MaxUnreadNotificationLevel,omitempty"`
	UnreadCount                *int32                 `json:"UnreadCount,omitempty"`
}
