import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorProto } from "./errorproto";
export declare enum ErrorsCodeEnum {
    BadRequest = "BAD_REQUEST",
    Forbidden = "FORBIDDEN",
    NotFound = "NOT_FOUND",
    Conflict = "CONFLICT",
    Gone = "GONE",
    PreconditionFailed = "PRECONDITION_FAILED",
    InternalError = "INTERNAL_ERROR",
    ServiceUnavailable = "SERVICE_UNAVAILABLE"
}
/**
 * Request Error information. The presence of an error field signals that the operation has failed.
**/
export declare class Errors extends SpeakeasyBase {
    code?: ErrorsCodeEnum;
    error?: ErrorProto[];
    requestId?: string;
}
