package shared

type FailureInfoTypeEnum string

const (
	FailureInfoTypeEnumFailureTypeUnspecified FailureInfoTypeEnum = "FAILURE_TYPE_UNSPECIFIED"
	FailureInfoTypeEnumPushFailed             FailureInfoTypeEnum = "PUSH_FAILED"
	FailureInfoTypeEnumPushImageNotFound      FailureInfoTypeEnum = "PUSH_IMAGE_NOT_FOUND"
	FailureInfoTypeEnumPushNotAuthorized      FailureInfoTypeEnum = "PUSH_NOT_AUTHORIZED"
	FailureInfoTypeEnumLoggingFailure         FailureInfoTypeEnum = "LOGGING_FAILURE"
	FailureInfoTypeEnumUserBuildStep          FailureInfoTypeEnum = "USER_BUILD_STEP"
	FailureInfoTypeEnumFetchSourceFailed      FailureInfoTypeEnum = "FETCH_SOURCE_FAILED"
)

// FailureInfo
// A fatal problem encountered during the execution of the build.
type FailureInfo struct {
	Detail *string              `json:"detail,omitempty"`
	Type   *FailureInfoTypeEnum `json:"type,omitempty"`
}
