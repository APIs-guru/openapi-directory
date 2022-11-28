import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HttpRouteRedirectResponseCodeEnum {
    ResponseCodeUnspecified = "RESPONSE_CODE_UNSPECIFIED",
    MovedPermanentlyDefault = "MOVED_PERMANENTLY_DEFAULT",
    Found = "FOUND",
    SeeOther = "SEE_OTHER",
    TemporaryRedirect = "TEMPORARY_REDIRECT",
    PermanentRedirect = "PERMANENT_REDIRECT"
}
/**
 * The specification for redirecting traffic.
**/
export declare class HttpRouteRedirect extends SpeakeasyBase {
    hostRedirect?: string;
    httpsRedirect?: boolean;
    pathRedirect?: string;
    portRedirect?: number;
    prefixRewrite?: string;
    responseCode?: HttpRouteRedirectResponseCodeEnum;
    stripQuery?: boolean;
}
