import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorProto } from "./errorproto";

export enum ErrorsCodeEnum {
    BadRequest = "BAD_REQUEST"
,    Forbidden = "FORBIDDEN"
,    NotFound = "NOT_FOUND"
,    Conflict = "CONFLICT"
,    Gone = "GONE"
,    PreconditionFailed = "PRECONDITION_FAILED"
,    InternalError = "INTERNAL_ERROR"
,    ServiceUnavailable = "SERVICE_UNAVAILABLE"
}


// Errors
/** 
 * Request Error information. The presence of an error field signals that the operation has failed.
**/
export class Errors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ErrorsCodeEnum;

  @Metadata({ data: "json, name=error", elemType: shared.ErrorProto })
  error?: ErrorProto[];

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
