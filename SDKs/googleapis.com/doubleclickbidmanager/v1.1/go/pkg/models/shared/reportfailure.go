package shared

type ReportFailureErrorCodeEnum string

const (
	ReportFailureErrorCodeEnumAuthenticationError                                     ReportFailureErrorCodeEnum = "AUTHENTICATION_ERROR"
	ReportFailureErrorCodeEnumUnauthorizedAPIAccess                                   ReportFailureErrorCodeEnum = "UNAUTHORIZED_API_ACCESS"
	ReportFailureErrorCodeEnumServerError                                             ReportFailureErrorCodeEnum = "SERVER_ERROR"
	ReportFailureErrorCodeEnumValidationError                                         ReportFailureErrorCodeEnum = "VALIDATION_ERROR"
	ReportFailureErrorCodeEnumReportingFatalError                                     ReportFailureErrorCodeEnum = "REPORTING_FATAL_ERROR"
	ReportFailureErrorCodeEnumReportingTransientError                                 ReportFailureErrorCodeEnum = "REPORTING_TRANSIENT_ERROR"
	ReportFailureErrorCodeEnumReportingImcompatibleMetrics                            ReportFailureErrorCodeEnum = "REPORTING_IMCOMPATIBLE_METRICS"
	ReportFailureErrorCodeEnumReportingIllegalFilename                                ReportFailureErrorCodeEnum = "REPORTING_ILLEGAL_FILENAME"
	ReportFailureErrorCodeEnumReportingQueryNotFound                                  ReportFailureErrorCodeEnum = "REPORTING_QUERY_NOT_FOUND"
	ReportFailureErrorCodeEnumReportingBucketNotFound                                 ReportFailureErrorCodeEnum = "REPORTING_BUCKET_NOT_FOUND"
	ReportFailureErrorCodeEnumReportingCreateBucketFailed                             ReportFailureErrorCodeEnum = "REPORTING_CREATE_BUCKET_FAILED"
	ReportFailureErrorCodeEnumReportingDeleteBucketFailed                             ReportFailureErrorCodeEnum = "REPORTING_DELETE_BUCKET_FAILED"
	ReportFailureErrorCodeEnumReportingUpdateBucketPermissionFailed                   ReportFailureErrorCodeEnum = "REPORTING_UPDATE_BUCKET_PERMISSION_FAILED"
	ReportFailureErrorCodeEnumReportingWriteBucketObjectFailed                        ReportFailureErrorCodeEnum = "REPORTING_WRITE_BUCKET_OBJECT_FAILED"
	ReportFailureErrorCodeEnumDeprecatedReportingInvalidQuery                         ReportFailureErrorCodeEnum = "DEPRECATED_REPORTING_INVALID_QUERY"
	ReportFailureErrorCodeEnumReportingInvalidQueryTooManyUnfilteredLargeGroupBys     ReportFailureErrorCodeEnum = "REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS"
	ReportFailureErrorCodeEnumReportingInvalidQueryTitleMissing                       ReportFailureErrorCodeEnum = "REPORTING_INVALID_QUERY_TITLE_MISSING"
	ReportFailureErrorCodeEnumReportingInvalidQueryMissingPartnerAndAdvertiserFilters ReportFailureErrorCodeEnum = "REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS"
)

type ReportFailure struct {
	ErrorCode *ReportFailureErrorCodeEnum `json:"errorCode,omitempty"`
}
