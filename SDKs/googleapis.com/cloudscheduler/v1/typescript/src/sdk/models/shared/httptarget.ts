import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";

export enum HttpTargetHttpMethodEnum {
    HttpMethodUnspecified = "HTTP_METHOD_UNSPECIFIED"
,    Post = "POST"
,    Get = "GET"
,    Head = "HEAD"
,    Put = "PUT"
,    Delete = "DELETE"
,    Patch = "PATCH"
,    Options = "OPTIONS"
}


// HttpTarget
/** 
 * Http target. The job will be pushed to the job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.
**/
export class HttpTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: HttpTargetHttpMethodEnum;

  @Metadata({ data: "json, name=oauthToken" })
  oauthToken?: OAuthToken;

  @Metadata({ data: "json, name=oidcToken" })
  oidcToken?: OidcToken;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
