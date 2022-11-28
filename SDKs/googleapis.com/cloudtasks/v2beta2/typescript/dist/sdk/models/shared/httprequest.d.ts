import { SpeakeasyBase } from "../../../internal/utils";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";
export declare enum HttpRequestHttpMethodEnum {
    HttpMethodUnspecified = "HTTP_METHOD_UNSPECIFIED",
    Post = "POST",
    Get = "GET",
    Head = "HEAD",
    Put = "PUT",
    Delete = "DELETE",
    Patch = "PATCH",
    Options = "OPTIONS"
}
/**
 * HTTP request. The task will be pushed to the worker as an HTTP request. An HTTP request embodies a url, an http method, headers, body and authorization for the http task.
**/
export declare class HttpRequest extends SpeakeasyBase {
    body?: string;
    headers?: Map<string, string>;
    httpMethod?: HttpRequestHttpMethodEnum;
    oauthToken?: OAuthToken;
    oidcToken?: OidcToken;
    url?: string;
}
