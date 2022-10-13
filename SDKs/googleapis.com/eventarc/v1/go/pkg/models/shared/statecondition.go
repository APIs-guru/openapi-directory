package shared

type StateConditionCodeEnum string

const (
	StateConditionCodeEnumOk                 StateConditionCodeEnum = "OK"
	StateConditionCodeEnumCancelled          StateConditionCodeEnum = "CANCELLED"
	StateConditionCodeEnumUnknown            StateConditionCodeEnum = "UNKNOWN"
	StateConditionCodeEnumInvalidArgument    StateConditionCodeEnum = "INVALID_ARGUMENT"
	StateConditionCodeEnumDeadlineExceeded   StateConditionCodeEnum = "DEADLINE_EXCEEDED"
	StateConditionCodeEnumNotFound           StateConditionCodeEnum = "NOT_FOUND"
	StateConditionCodeEnumAlreadyExists      StateConditionCodeEnum = "ALREADY_EXISTS"
	StateConditionCodeEnumPermissionDenied   StateConditionCodeEnum = "PERMISSION_DENIED"
	StateConditionCodeEnumUnauthenticated    StateConditionCodeEnum = "UNAUTHENTICATED"
	StateConditionCodeEnumResourceExhausted  StateConditionCodeEnum = "RESOURCE_EXHAUSTED"
	StateConditionCodeEnumFailedPrecondition StateConditionCodeEnum = "FAILED_PRECONDITION"
	StateConditionCodeEnumAborted            StateConditionCodeEnum = "ABORTED"
	StateConditionCodeEnumOutOfRange         StateConditionCodeEnum = "OUT_OF_RANGE"
	StateConditionCodeEnumUnimplemented      StateConditionCodeEnum = "UNIMPLEMENTED"
	StateConditionCodeEnumInternal           StateConditionCodeEnum = "INTERNAL"
	StateConditionCodeEnumUnavailable        StateConditionCodeEnum = "UNAVAILABLE"
	StateConditionCodeEnumDataLoss           StateConditionCodeEnum = "DATA_LOSS"
)

type StateCondition struct {
	Code    *StateConditionCodeEnum `json:"code"`
	Message *string                 `json:"message"`
}
