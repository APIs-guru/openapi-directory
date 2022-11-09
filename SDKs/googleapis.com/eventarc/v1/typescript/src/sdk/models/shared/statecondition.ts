import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum StateConditionCodeEnum {
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


// StateCondition
/** 
 * A condition that is part of the trigger state computation.
**/
export class StateCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: StateConditionCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
