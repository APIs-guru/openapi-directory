import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworksQueryParams extends SpeakeasyBase {
    labelSelector?: string;
    name?: string;
}
export declare class GetNetworks200ApplicationJsonMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetNetworks200ApplicationJsonMeta extends SpeakeasyBase {
    pagination: GetNetworks200ApplicationJsonMetaPagination;
}
/**
 * Protection configuration for the Network
**/
export declare class GetNetworks200ApplicationJsonNetworksProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare class GetNetworks200ApplicationJsonNetworksRoutes extends SpeakeasyBase {
    destination: string;
    gateway: string;
}
export declare enum GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class GetNetworks200ApplicationJsonNetworksSubnets extends SpeakeasyBase {
    gateway: string;
    ipRange?: string;
    networkZone: string;
    type: GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum;
}
export declare class GetNetworks200ApplicationJsonNetworks extends SpeakeasyBase {
    created: string;
    id: number;
    ipRange: string;
    labels: Map<string, any>;
    loadBalancers?: number[];
    name: string;
    protection: GetNetworks200ApplicationJsonNetworksProtection;
    routes: GetNetworks200ApplicationJsonNetworksRoutes[];
    servers: number[];
    subnets: GetNetworks200ApplicationJsonNetworksSubnets[];
}
export declare class GetNetworks200ApplicationJson extends SpeakeasyBase {
    meta?: GetNetworks200ApplicationJsonMeta;
    networks: GetNetworks200ApplicationJsonNetworks[];
}
export declare class GetNetworksRequest extends SpeakeasyBase {
    queryParams: GetNetworksQueryParams;
}
export declare class GetNetworksResponse extends SpeakeasyBase {
    contentType: string;
    getNetworks200ApplicationJsonObject?: GetNetworks200ApplicationJson;
    statusCode: number;
}
