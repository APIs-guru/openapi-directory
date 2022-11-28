import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseStatusCode } from "./responsestatuscode";
import { BasicAuthentication } from "./basicauthentication";
import { PingConfig } from "./pingconfig";
export declare enum HttpCheckContentTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    UrlEncoded = "URL_ENCODED"
}
export declare enum HttpCheckRequestMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    Get = "GET",
    Post = "POST"
}
/**
 * Information involved in an HTTP/HTTPS Uptime check request.
**/
export declare class HttpCheck extends SpeakeasyBase {
    acceptedResponseStatusCodes?: ResponseStatusCode[];
    authInfo?: BasicAuthentication;
    body?: string;
    contentType?: HttpCheckContentTypeEnum;
    headers?: Map<string, string>;
    maskHeaders?: boolean;
    path?: string;
    pingConfig?: PingConfig;
    port?: number;
    requestMethod?: HttpCheckRequestMethodEnum;
    useSsl?: boolean;
    validateSsl?: boolean;
}
