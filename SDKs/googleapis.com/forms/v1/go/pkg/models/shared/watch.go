package shared

type WatchErrorTypeEnum string

const (
	WatchErrorTypeEnumErrorTypeUnspecified WatchErrorTypeEnum = "ERROR_TYPE_UNSPECIFIED"
	WatchErrorTypeEnumProjectNotAuthorized WatchErrorTypeEnum = "PROJECT_NOT_AUTHORIZED"
	WatchErrorTypeEnumNoUserAccess         WatchErrorTypeEnum = "NO_USER_ACCESS"
	WatchErrorTypeEnumOtherErrors          WatchErrorTypeEnum = "OTHER_ERRORS"
)

type WatchEventTypeEnum string

const (
	WatchEventTypeEnumEventTypeUnspecified WatchEventTypeEnum = "EVENT_TYPE_UNSPECIFIED"
	WatchEventTypeEnumSchema               WatchEventTypeEnum = "SCHEMA"
	WatchEventTypeEnumResponses            WatchEventTypeEnum = "RESPONSES"
)

type WatchStateEnum string

const (
	WatchStateEnumStateUnspecified WatchStateEnum = "STATE_UNSPECIFIED"
	WatchStateEnumActive           WatchStateEnum = "ACTIVE"
	WatchStateEnumSuspended        WatchStateEnum = "SUSPENDED"
)

// Watch
// A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
type Watch struct {
	CreateTime *string             `json:"createTime,omitempty"`
	ErrorType  *WatchErrorTypeEnum `json:"errorType,omitempty"`
	EventType  *WatchEventTypeEnum `json:"eventType,omitempty"`
	ExpireTime *string             `json:"expireTime,omitempty"`
	ID         *string             `json:"id,omitempty"`
	State      *WatchStateEnum     `json:"state,omitempty"`
	Target     *WatchTarget        `json:"target,omitempty"`
}

// WatchInput
// A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
type WatchInput struct {
	EventType *WatchEventTypeEnum `json:"eventType,omitempty"`
	Target    *WatchTarget        `json:"target,omitempty"`
}
