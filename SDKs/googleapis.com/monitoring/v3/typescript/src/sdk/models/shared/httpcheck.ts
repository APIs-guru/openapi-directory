import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseStatusCode } from "./responsestatuscode";
import { BasicAuthentication } from "./basicauthentication";
import { PingConfig } from "./pingconfig";

export enum HttpCheckContentTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    UrlEncoded = "URL_ENCODED"
}

export enum HttpCheckRequestMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED"
,    Get = "GET"
,    Post = "POST"
}


// HttpCheck
/** 
 * Information involved in an HTTP/HTTPS Uptime check request.
**/
export class HttpCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptedResponseStatusCodes", elemType: shared.ResponseStatusCode })
  acceptedResponseStatusCodes?: ResponseStatusCode[];

  @Metadata({ data: "json, name=authInfo" })
  authInfo?: BasicAuthentication;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=contentType" })
  contentType?: HttpCheckContentTypeEnum;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=maskHeaders" })
  maskHeaders?: boolean;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=pingConfig" })
  pingConfig?: PingConfig;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=requestMethod" })
  requestMethod?: HttpCheckRequestMethodEnum;

  @Metadata({ data: "json, name=useSsl" })
  useSsl?: boolean;

  @Metadata({ data: "json, name=validateSsl" })
  validateSsl?: boolean;
}
