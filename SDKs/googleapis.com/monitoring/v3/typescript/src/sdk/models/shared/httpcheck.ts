import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseStatusCode } from "./responsestatuscode";
import { BasicAuthentication } from "./basicauthentication";
import { PingConfig } from "./pingconfig";


export enum HttpCheckContentTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    UrlEncoded = "URL_ENCODED"
}

export enum HttpCheckRequestMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    Get = "GET",
    Post = "POST"
}


// HttpCheck
/** 
 * Information involved in an HTTP/HTTPS Uptime check request.
**/
export class HttpCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptedResponseStatusCodes", elemType: ResponseStatusCode })
  acceptedResponseStatusCodes?: ResponseStatusCode[];

  @SpeakeasyMetadata({ data: "json, name=authInfo" })
  authInfo?: BasicAuthentication;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: HttpCheckContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maskHeaders" })
  maskHeaders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=pingConfig" })
  pingConfig?: PingConfig;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=requestMethod" })
  requestMethod?: HttpCheckRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=useSsl" })
  useSsl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validateSsl" })
  validateSsl?: boolean;
}
