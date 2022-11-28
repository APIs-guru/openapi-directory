import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomEventErrorCodeEnum {
    Unknown = "UNKNOWN",
    InvalidArgument = "INVALID_ARGUMENT",
    Internal = "INTERNAL",
    PermissionDenied = "PERMISSION_DENIED",
    NotFound = "NOT_FOUND"
}
/**
 * The error code and description for a custom event that failed to insert.
**/
export declare class CustomEventError extends SpeakeasyBase {
    code?: CustomEventErrorCodeEnum;
    kind?: string;
    message?: string;
}
