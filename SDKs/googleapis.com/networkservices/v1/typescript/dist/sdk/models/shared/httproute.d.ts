import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteRouteRule } from "./httprouterouterule";
/**
 * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
**/
export declare class HttpRoute extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    gateways?: string[];
    hostnames?: string[];
    labels?: Map<string, string>;
    meshes?: string[];
    name?: string;
    rules?: HttpRouteRouteRule[];
    selfLink?: string;
    updateTime?: string;
}
/**
 * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
**/
export declare class HttpRouteInput extends SpeakeasyBase {
    description?: string;
    gateways?: string[];
    hostnames?: string[];
    labels?: Map<string, string>;
    meshes?: string[];
    name?: string;
    rules?: HttpRouteRouteRule[];
}
