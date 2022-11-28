import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteRouteRule } from "./grpcrouterouterule";
/**
 * GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.
**/
export declare class GrpcRouteInput extends SpeakeasyBase {
    description?: string;
    gateways?: string[];
    hostnames?: string[];
    labels?: Map<string, string>;
    meshes?: string[];
    name?: string;
    rules?: GrpcRouteRouteRule[];
}
/**
 * GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.
**/
export declare class GrpcRoute extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    gateways?: string[];
    hostnames?: string[];
    labels?: Map<string, string>;
    meshes?: string[];
    name?: string;
    rules?: GrpcRouteRouteRule[];
    selfLink?: string;
    updateTime?: string;
}
