import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConversionErrorCodeEnum {
    InvalidArgument = "INVALID_ARGUMENT",
    Internal = "INTERNAL",
    PermissionDenied = "PERMISSION_DENIED",
    NotFound = "NOT_FOUND"
}


// ConversionError
/** 
 * The error code and description for a conversion that failed to insert or update.
**/
export class ConversionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ConversionErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
