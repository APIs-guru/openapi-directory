import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CustomEventErrorCodeEnum {
    Unknown = "UNKNOWN"
,    InvalidArgument = "INVALID_ARGUMENT"
,    Internal = "INTERNAL"
,    PermissionDenied = "PERMISSION_DENIED"
,    NotFound = "NOT_FOUND"
}


// CustomEventError
/** 
 * The error code and description for a custom event that failed to insert.
**/
export class CustomEventError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: CustomEventErrorCodeEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
