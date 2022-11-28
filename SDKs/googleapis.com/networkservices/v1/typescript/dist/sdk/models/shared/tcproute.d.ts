import { SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteRouteRule } from "./tcprouterouterule";
/**
 * TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.
**/
export declare class TcpRoute extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    gateways?: string[];
    labels?: Map<string, string>;
    meshes?: string[];
    name?: string;
    rules?: TcpRouteRouteRule[];
    selfLink?: string;
    updateTime?: string;
}
/**
 * TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.
**/
export declare class TcpRouteInput extends SpeakeasyBase {
    description?: string;
    gateways?: string[];
    labels?: Map<string, string>;
    meshes?: string[];
    name?: string;
    rules?: TcpRouteRouteRule[];
}
