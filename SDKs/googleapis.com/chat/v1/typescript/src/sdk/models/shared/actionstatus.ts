import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActionStatusStatusCodeEnum {
    Ok = "OK",
    Cancelled = "CANCELLED",
    Unknown = "UNKNOWN",
    InvalidArgument = "INVALID_ARGUMENT",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    NotFound = "NOT_FOUND",
    AlreadyExists = "ALREADY_EXISTS",
    PermissionDenied = "PERMISSION_DENIED",
    Unauthenticated = "UNAUTHENTICATED",
    ResourceExhausted = "RESOURCE_EXHAUSTED",
    FailedPrecondition = "FAILED_PRECONDITION",
    Aborted = "ABORTED",
    OutOfRange = "OUT_OF_RANGE",
    Unimplemented = "UNIMPLEMENTED",
    Internal = "INTERNAL",
    Unavailable = "UNAVAILABLE",
    DataLoss = "DATA_LOSS"
}


// ActionStatus
/** 
 * Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).
**/
export class ActionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: ActionStatusStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=userFacingMessage" })
  userFacingMessage?: string;
}
