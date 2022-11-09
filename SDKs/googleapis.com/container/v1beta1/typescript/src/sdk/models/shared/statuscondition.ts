import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum StatusConditionCanonicalCodeEnum {
    Ok = "OK"
,    Cancelled = "CANCELLED"
,    Unknown = "UNKNOWN"
,    InvalidArgument = "INVALID_ARGUMENT"
,    DeadlineExceeded = "DEADLINE_EXCEEDED"
,    NotFound = "NOT_FOUND"
,    AlreadyExists = "ALREADY_EXISTS"
,    PermissionDenied = "PERMISSION_DENIED"
,    Unauthenticated = "UNAUTHENTICATED"
,    ResourceExhausted = "RESOURCE_EXHAUSTED"
,    FailedPrecondition = "FAILED_PRECONDITION"
,    Aborted = "ABORTED"
,    OutOfRange = "OUT_OF_RANGE"
,    Unimplemented = "UNIMPLEMENTED"
,    Internal = "INTERNAL"
,    Unavailable = "UNAVAILABLE"
,    DataLoss = "DATA_LOSS"
}

export enum StatusConditionCodeEnum {
    Unknown = "UNKNOWN"
,    GceStockout = "GCE_STOCKOUT"
,    GkeServiceAccountDeleted = "GKE_SERVICE_ACCOUNT_DELETED"
,    GceQuotaExceeded = "GCE_QUOTA_EXCEEDED"
,    SetByOperator = "SET_BY_OPERATOR"
,    CloudKmsKeyError = "CLOUD_KMS_KEY_ERROR"
,    CaExpiring = "CA_EXPIRING"
}


// StatusCondition
/** 
 * StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED).
**/
export class StatusCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=canonicalCode" })
  canonicalCode?: StatusConditionCanonicalCodeEnum;

  @Metadata({ data: "json, name=code" })
  code?: StatusConditionCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
