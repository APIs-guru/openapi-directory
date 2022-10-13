package shared

type NotificationsSummaryDto struct {
	MaxUnreadNotificationLevel *NotificationLevelEnum `json:"MaxUnreadNotificationLevel"`
	UnreadCount                *int32                 `json:"UnreadCount"`
}
