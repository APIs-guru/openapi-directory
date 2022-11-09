import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";
export declare enum HttpTargetHttpMethodEnum {
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
 * Http target. The job will be pushed to the job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.
**/
export declare class HttpTarget extends SpeakeasyBase {
    body?: string;
    headers?: Map<string, string>;
    httpMethod?: HttpTargetHttpMethodEnum;
    oauthToken?: OAuthToken;
    oidcToken?: OidcToken;
    uri?: string;
}
