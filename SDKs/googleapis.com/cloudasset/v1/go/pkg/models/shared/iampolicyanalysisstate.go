package shared

type IamPolicyAnalysisStateCodeEnum string

const (
	IamPolicyAnalysisStateCodeEnumOk                 IamPolicyAnalysisStateCodeEnum = "OK"
	IamPolicyAnalysisStateCodeEnumCancelled          IamPolicyAnalysisStateCodeEnum = "CANCELLED"
	IamPolicyAnalysisStateCodeEnumUnknown            IamPolicyAnalysisStateCodeEnum = "UNKNOWN"
	IamPolicyAnalysisStateCodeEnumInvalidArgument    IamPolicyAnalysisStateCodeEnum = "INVALID_ARGUMENT"
	IamPolicyAnalysisStateCodeEnumDeadlineExceeded   IamPolicyAnalysisStateCodeEnum = "DEADLINE_EXCEEDED"
	IamPolicyAnalysisStateCodeEnumNotFound           IamPolicyAnalysisStateCodeEnum = "NOT_FOUND"
	IamPolicyAnalysisStateCodeEnumAlreadyExists      IamPolicyAnalysisStateCodeEnum = "ALREADY_EXISTS"
	IamPolicyAnalysisStateCodeEnumPermissionDenied   IamPolicyAnalysisStateCodeEnum = "PERMISSION_DENIED"
	IamPolicyAnalysisStateCodeEnumUnauthenticated    IamPolicyAnalysisStateCodeEnum = "UNAUTHENTICATED"
	IamPolicyAnalysisStateCodeEnumResourceExhausted  IamPolicyAnalysisStateCodeEnum = "RESOURCE_EXHAUSTED"
	IamPolicyAnalysisStateCodeEnumFailedPrecondition IamPolicyAnalysisStateCodeEnum = "FAILED_PRECONDITION"
	IamPolicyAnalysisStateCodeEnumAborted            IamPolicyAnalysisStateCodeEnum = "ABORTED"
	IamPolicyAnalysisStateCodeEnumOutOfRange         IamPolicyAnalysisStateCodeEnum = "OUT_OF_RANGE"
	IamPolicyAnalysisStateCodeEnumUnimplemented      IamPolicyAnalysisStateCodeEnum = "UNIMPLEMENTED"
	IamPolicyAnalysisStateCodeEnumInternal           IamPolicyAnalysisStateCodeEnum = "INTERNAL"
	IamPolicyAnalysisStateCodeEnumUnavailable        IamPolicyAnalysisStateCodeEnum = "UNAVAILABLE"
	IamPolicyAnalysisStateCodeEnumDataLoss           IamPolicyAnalysisStateCodeEnum = "DATA_LOSS"
)

// IamPolicyAnalysisState
// Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
type IamPolicyAnalysisState struct {
	Cause *string                         `json:"cause,omitempty"`
	Code  *IamPolicyAnalysisStateCodeEnum `json:"code,omitempty"`
}
