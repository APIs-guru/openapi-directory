import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ErrorV1CodeEnum {
    Unauthorized = "unauthorized",
    NotFound = "not_found",
    HttpNotSupported = "http_not_supported",
    InvalidMethod = "invalid_method",
    InvalidFormat = "invalid_format",
    InvalidRequest = "invalid_request",
    InternalServerError = "internal_server_error"
}


// ErrorV1
/** 
 * Object containing details about an [error](https://www.heraldapi.com/docs/errors).
**/
export class ErrorV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: ErrorV1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
