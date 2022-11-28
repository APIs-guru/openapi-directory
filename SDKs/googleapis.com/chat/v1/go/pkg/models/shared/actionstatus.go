package shared

type ActionStatusStatusCodeEnum string

const (
	ActionStatusStatusCodeEnumOk                 ActionStatusStatusCodeEnum = "OK"
	ActionStatusStatusCodeEnumCancelled          ActionStatusStatusCodeEnum = "CANCELLED"
	ActionStatusStatusCodeEnumUnknown            ActionStatusStatusCodeEnum = "UNKNOWN"
	ActionStatusStatusCodeEnumInvalidArgument    ActionStatusStatusCodeEnum = "INVALID_ARGUMENT"
	ActionStatusStatusCodeEnumDeadlineExceeded   ActionStatusStatusCodeEnum = "DEADLINE_EXCEEDED"
	ActionStatusStatusCodeEnumNotFound           ActionStatusStatusCodeEnum = "NOT_FOUND"
	ActionStatusStatusCodeEnumAlreadyExists      ActionStatusStatusCodeEnum = "ALREADY_EXISTS"
	ActionStatusStatusCodeEnumPermissionDenied   ActionStatusStatusCodeEnum = "PERMISSION_DENIED"
	ActionStatusStatusCodeEnumUnauthenticated    ActionStatusStatusCodeEnum = "UNAUTHENTICATED"
	ActionStatusStatusCodeEnumResourceExhausted  ActionStatusStatusCodeEnum = "RESOURCE_EXHAUSTED"
	ActionStatusStatusCodeEnumFailedPrecondition ActionStatusStatusCodeEnum = "FAILED_PRECONDITION"
	ActionStatusStatusCodeEnumAborted            ActionStatusStatusCodeEnum = "ABORTED"
	ActionStatusStatusCodeEnumOutOfRange         ActionStatusStatusCodeEnum = "OUT_OF_RANGE"
	ActionStatusStatusCodeEnumUnimplemented      ActionStatusStatusCodeEnum = "UNIMPLEMENTED"
	ActionStatusStatusCodeEnumInternal           ActionStatusStatusCodeEnum = "INTERNAL"
	ActionStatusStatusCodeEnumUnavailable        ActionStatusStatusCodeEnum = "UNAVAILABLE"
	ActionStatusStatusCodeEnumDataLoss           ActionStatusStatusCodeEnum = "DATA_LOSS"
)

// ActionStatus
// Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).
type ActionStatus struct {
	StatusCode        *ActionStatusStatusCodeEnum `json:"statusCode,omitempty"`
	UserFacingMessage *string                     `json:"userFacingMessage,omitempty"`
}
