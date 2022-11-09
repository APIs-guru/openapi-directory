import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IamPolicyAnalysisStateCodeEnum {
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


// IamPolicyAnalysisState
/** 
 * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
**/
export class IamPolicyAnalysisState extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=code" })
  code?: IamPolicyAnalysisStateCodeEnum;
}
