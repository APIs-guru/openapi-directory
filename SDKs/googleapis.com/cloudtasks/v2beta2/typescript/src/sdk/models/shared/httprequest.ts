import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";

export enum HttpRequestHttpMethodEnum {
    HttpMethodUnspecified = "HTTP_METHOD_UNSPECIFIED"
,    Post = "POST"
,    Get = "GET"
,    Head = "HEAD"
,    Put = "PUT"
,    Delete = "DELETE"
,    Patch = "PATCH"
,    Options = "OPTIONS"
}


// HttpRequest
/** 
 * HTTP request. The task will be pushed to the worker as an HTTP request. An HTTP request embodies a url, an http method, headers, body and authorization for the http task.
**/
export class HttpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: HttpRequestHttpMethodEnum;

  @Metadata({ data: "json, name=oauthToken" })
  oauthToken?: OAuthToken;

  @Metadata({ data: "json, name=oidcToken" })
  oidcToken?: OidcToken;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
