package shared

type GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum string

const (
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumOk                 GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "OK"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumCancelled          GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "CANCELLED"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumUnknown            GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "UNKNOWN"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumInvalidArgument    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "INVALID_ARGUMENT"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumDeadlineExceeded   GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "DEADLINE_EXCEEDED"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumNotFound           GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "NOT_FOUND"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumAlreadyExists      GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "ALREADY_EXISTS"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumPermissionDenied   GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "PERMISSION_DENIED"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumUnauthenticated    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "UNAUTHENTICATED"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumResourceExhausted  GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "RESOURCE_EXHAUSTED"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumFailedPrecondition GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "FAILED_PRECONDITION"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumAborted            GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "ABORTED"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumOutOfRange         GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "OUT_OF_RANGE"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumUnimplemented      GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "UNIMPLEMENTED"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumInternal           GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "INTERNAL"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumUnavailable        GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "UNAVAILABLE"
	GoogleCloudAssetV1p4beta1AnalysisStateCodeEnumDataLoss           GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = "DATA_LOSS"
)

type GoogleCloudAssetV1p4beta1AnalysisState struct {
	Cause *string                                         `json:"cause"`
	Code  *GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum `json:"code"`
}
