import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorProto } from "./errorproto";


export enum ErrorsCodeEnum {
    BadRequest = "BAD_REQUEST",
    Forbidden = "FORBIDDEN",
    NotFound = "NOT_FOUND",
    Conflict = "CONFLICT",
    Gone = "GONE",
    PreconditionFailed = "PRECONDITION_FAILED",
    InternalError = "INTERNAL_ERROR",
    ServiceUnavailable = "SERVICE_UNAVAILABLE"
}


// Errors
/** 
 * Request Error information. The presence of an error field signals that the operation has failed.
**/
export class Errors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ErrorsCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=error", elemType: ErrorProto })
  error?: ErrorProto[];

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
