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

type Watch struct {
	CreateTime *string             `json:"createTime"`
	ErrorType  *WatchErrorTypeEnum `json:"errorType"`
	EventType  *WatchEventTypeEnum `json:"eventType"`
	ExpireTime *string             `json:"expireTime"`
	ID         *string             `json:"id"`
	State      *WatchStateEnum     `json:"state"`
	Target     *WatchTarget        `json:"target"`
}
