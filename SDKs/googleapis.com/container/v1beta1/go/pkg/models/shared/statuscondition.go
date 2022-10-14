package shared

type StatusConditionCanonicalCodeEnum string

const (
	StatusConditionCanonicalCodeEnumOk                 StatusConditionCanonicalCodeEnum = "OK"
	StatusConditionCanonicalCodeEnumCancelled          StatusConditionCanonicalCodeEnum = "CANCELLED"
	StatusConditionCanonicalCodeEnumUnknown            StatusConditionCanonicalCodeEnum = "UNKNOWN"
	StatusConditionCanonicalCodeEnumInvalidArgument    StatusConditionCanonicalCodeEnum = "INVALID_ARGUMENT"
	StatusConditionCanonicalCodeEnumDeadlineExceeded   StatusConditionCanonicalCodeEnum = "DEADLINE_EXCEEDED"
	StatusConditionCanonicalCodeEnumNotFound           StatusConditionCanonicalCodeEnum = "NOT_FOUND"
	StatusConditionCanonicalCodeEnumAlreadyExists      StatusConditionCanonicalCodeEnum = "ALREADY_EXISTS"
	StatusConditionCanonicalCodeEnumPermissionDenied   StatusConditionCanonicalCodeEnum = "PERMISSION_DENIED"
	StatusConditionCanonicalCodeEnumUnauthenticated    StatusConditionCanonicalCodeEnum = "UNAUTHENTICATED"
	StatusConditionCanonicalCodeEnumResourceExhausted  StatusConditionCanonicalCodeEnum = "RESOURCE_EXHAUSTED"
	StatusConditionCanonicalCodeEnumFailedPrecondition StatusConditionCanonicalCodeEnum = "FAILED_PRECONDITION"
	StatusConditionCanonicalCodeEnumAborted            StatusConditionCanonicalCodeEnum = "ABORTED"
	StatusConditionCanonicalCodeEnumOutOfRange         StatusConditionCanonicalCodeEnum = "OUT_OF_RANGE"
	StatusConditionCanonicalCodeEnumUnimplemented      StatusConditionCanonicalCodeEnum = "UNIMPLEMENTED"
	StatusConditionCanonicalCodeEnumInternal           StatusConditionCanonicalCodeEnum = "INTERNAL"
	StatusConditionCanonicalCodeEnumUnavailable        StatusConditionCanonicalCodeEnum = "UNAVAILABLE"
	StatusConditionCanonicalCodeEnumDataLoss           StatusConditionCanonicalCodeEnum = "DATA_LOSS"
)

type StatusConditionCodeEnum string

const (
	StatusConditionCodeEnumUnknown                  StatusConditionCodeEnum = "UNKNOWN"
	StatusConditionCodeEnumGceStockout              StatusConditionCodeEnum = "GCE_STOCKOUT"
	StatusConditionCodeEnumGkeServiceAccountDeleted StatusConditionCodeEnum = "GKE_SERVICE_ACCOUNT_DELETED"
	StatusConditionCodeEnumGceQuotaExceeded         StatusConditionCodeEnum = "GCE_QUOTA_EXCEEDED"
	StatusConditionCodeEnumSetByOperator            StatusConditionCodeEnum = "SET_BY_OPERATOR"
	StatusConditionCodeEnumCloudKmsKeyError         StatusConditionCodeEnum = "CLOUD_KMS_KEY_ERROR"
	StatusConditionCodeEnumCaExpiring               StatusConditionCodeEnum = "CA_EXPIRING"
)

type StatusCondition struct {
	CanonicalCode *StatusConditionCanonicalCodeEnum `json:"canonicalCode,omitempty"`
	Code          *StatusConditionCodeEnum          `json:"code,omitempty"`
	Message       *string                           `json:"message,omitempty"`
}
