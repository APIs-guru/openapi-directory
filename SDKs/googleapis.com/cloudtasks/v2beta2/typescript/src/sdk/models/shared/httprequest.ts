import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";


export enum HttpRequestHttpMethodEnum {
    HttpMethodUnspecified = "HTTP_METHOD_UNSPECIFIED",
    Post = "POST",
    Get = "GET",
    Head = "HEAD",
    Put = "PUT",
    Delete = "DELETE",
    Patch = "PATCH",
    Options = "OPTIONS"
}


// HttpRequest
/** 
 * HTTP request. The task will be pushed to the worker as an HTTP request. An HTTP request embodies a url, an http method, headers, body and authorization for the http task.
**/
export class HttpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=httpMethod" })
  httpMethod?: HttpRequestHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=oauthToken" })
  oauthToken?: OAuthToken;

  @SpeakeasyMetadata({ data: "json, name=oidcToken" })
  oidcToken?: OidcToken;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
