import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConversionErrorCodeEnum {
    InvalidArgument = "INVALID_ARGUMENT"
,    Internal = "INTERNAL"
,    PermissionDenied = "PERMISSION_DENIED"
,    NotFound = "NOT_FOUND"
}


// ConversionError
/** 
 * The error code and description for a conversion that failed to insert or update.
**/
export class ConversionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ConversionErrorCodeEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
