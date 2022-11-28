import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum {
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
/**
 * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
**/
export declare class GoogleCloudAssetV1p4beta1AnalysisState extends SpeakeasyBase {
    cause?: string;
    code?: GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum;
}
