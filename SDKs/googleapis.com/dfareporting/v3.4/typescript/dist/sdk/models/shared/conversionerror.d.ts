import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConversionErrorCodeEnum {
    InvalidArgument = "INVALID_ARGUMENT",
    Internal = "INTERNAL",
    PermissionDenied = "PERMISSION_DENIED",
    NotFound = "NOT_FOUND"
}
/**
 * The error code and description for a conversion that failed to insert or update.
**/
export declare class ConversionError extends SpeakeasyBase {
    code?: ConversionErrorCodeEnum;
    kind?: string;
    message?: string;
}
