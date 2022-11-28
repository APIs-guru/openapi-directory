import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specification for modifying the URL of the request, prior to forwarding the request to the destination.
**/
export declare class HttpRouteUrlRewrite extends SpeakeasyBase {
    hostRewrite?: string;
    pathPrefixRewrite?: string;
}
