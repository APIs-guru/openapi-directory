package shared

type URLNotificationTypeEnum string

const (
	URLNotificationTypeEnumURLNotificationTypeUnspecified URLNotificationTypeEnum = "URL_NOTIFICATION_TYPE_UNSPECIFIED"
	URLNotificationTypeEnumURLUpdated                     URLNotificationTypeEnum = "URL_UPDATED"
	URLNotificationTypeEnumURLDeleted                     URLNotificationTypeEnum = "URL_DELETED"
)

// URLNotification
// `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
type URLNotification struct {
	NotifyTime *string                  `json:"notifyTime,omitempty"`
	Type       *URLNotificationTypeEnum `json:"type,omitempty"`
	URL        *string                  `json:"url,omitempty"`
}
