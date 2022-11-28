import { SpeakeasyBase } from "../../../internal/utils";
import { TlsRouteRouteRule } from "./tlsrouterouterule";
/**
 * TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
**/
export declare class TlsRoute extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    gateways?: string[];
    meshes?: string[];
    name?: string;
    rules?: TlsRouteRouteRule[];
    selfLink?: string;
    updateTime?: string;
}
/**
 * TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
**/
export declare class TlsRouteInput extends SpeakeasyBase {
    description?: string;
    gateways?: string[];
    meshes?: string[];
    name?: string;
    rules?: TlsRouteRouteRule[];
}
