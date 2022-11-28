import { SpeakeasyBase } from "../../../internal/utils";
import { HeaderOverride } from "./headeroverride";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";
import { UriOverride } from "./urioverride";
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
 * HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.
**/
export declare class HttpTarget extends SpeakeasyBase {
    headerOverrides?: HeaderOverride[];
    httpMethod?: HttpTargetHttpMethodEnum;
    oauthToken?: OAuthToken;
    oidcToken?: OidcToken;
    uriOverride?: UriOverride;
}
