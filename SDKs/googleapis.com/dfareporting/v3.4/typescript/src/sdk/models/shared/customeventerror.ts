import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomEventErrorCodeEnum {
    Unknown = "UNKNOWN",
    InvalidArgument = "INVALID_ARGUMENT",
    Internal = "INTERNAL",
    PermissionDenied = "PERMISSION_DENIED",
    NotFound = "NOT_FOUND"
}


// CustomEventError
/** 
 * The error code and description for a custom event that failed to insert.
**/
export class CustomEventError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: CustomEventErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
