import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReportFailureErrorCodeEnum {
    AuthenticationError = "AUTHENTICATION_ERROR"
,    UnauthorizedApiAccess = "UNAUTHORIZED_API_ACCESS"
,    ServerError = "SERVER_ERROR"
,    ValidationError = "VALIDATION_ERROR"
,    ReportingFatalError = "REPORTING_FATAL_ERROR"
,    ReportingTransientError = "REPORTING_TRANSIENT_ERROR"
,    ReportingImcompatibleMetrics = "REPORTING_IMCOMPATIBLE_METRICS"
,    ReportingIllegalFilename = "REPORTING_ILLEGAL_FILENAME"
,    ReportingQueryNotFound = "REPORTING_QUERY_NOT_FOUND"
,    ReportingBucketNotFound = "REPORTING_BUCKET_NOT_FOUND"
,    ReportingCreateBucketFailed = "REPORTING_CREATE_BUCKET_FAILED"
,    ReportingDeleteBucketFailed = "REPORTING_DELETE_BUCKET_FAILED"
,    ReportingUpdateBucketPermissionFailed = "REPORTING_UPDATE_BUCKET_PERMISSION_FAILED"
,    ReportingWriteBucketObjectFailed = "REPORTING_WRITE_BUCKET_OBJECT_FAILED"
,    DeprecatedReportingInvalidQuery = "DEPRECATED_REPORTING_INVALID_QUERY"
,    ReportingInvalidQueryTooManyUnfilteredLargeGroupBys = "REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS"
,    ReportingInvalidQueryTitleMissing = "REPORTING_INVALID_QUERY_TITLE_MISSING"
,    ReportingInvalidQueryMissingPartnerAndAdvertiserFilters = "REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS"
}


// ReportFailure
/** 
 * An explanation of a report failure.
**/
export class ReportFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: ReportFailureErrorCodeEnum;
}
