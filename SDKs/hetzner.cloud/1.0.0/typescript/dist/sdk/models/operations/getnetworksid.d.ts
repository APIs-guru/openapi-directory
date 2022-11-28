import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworksIdPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Protection configuration for the Network
**/
export declare class GetNetworksId200ApplicationJsonNetworkProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare class GetNetworksId200ApplicationJsonNetworkRoutes extends SpeakeasyBase {
    destination: string;
    gateway: string;
}
export declare enum GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class GetNetworksId200ApplicationJsonNetworkSubnets extends SpeakeasyBase {
    gateway: string;
    ipRange?: string;
    networkZone: string;
    type: GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum;
}
export declare class GetNetworksId200ApplicationJsonNetwork extends SpeakeasyBase {
    created: string;
    id: number;
    ipRange: string;
    labels: Map<string, any>;
    loadBalancers?: number[];
    name: string;
    protection: GetNetworksId200ApplicationJsonNetworkProtection;
    routes: GetNetworksId200ApplicationJsonNetworkRoutes[];
    servers: number[];
    subnets: GetNetworksId200ApplicationJsonNetworkSubnets[];
}
export declare class GetNetworksId200ApplicationJson extends SpeakeasyBase {
    network?: GetNetworksId200ApplicationJsonNetwork;
}
export declare class GetNetworksIdRequest extends SpeakeasyBase {
    pathParams: GetNetworksIdPathParams;
}
export declare class GetNetworksIdResponse extends SpeakeasyBase {
    contentType: string;
    getNetworksId200ApplicationJsonObject?: GetNetworksId200ApplicationJson;
    statusCode: number;
}
