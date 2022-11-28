import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User-defined labels (key-value pairs)
**/
export declare class PostNetworksCreateNetworkRequestLabels extends SpeakeasyBase {
    labelkey?: string;
}
export declare class PostNetworksCreateNetworkRequestRoutes extends SpeakeasyBase {
    destination: string;
    gateway: string;
}
export declare enum PostNetworksCreateNetworkRequestSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class PostNetworksCreateNetworkRequestSubnets extends SpeakeasyBase {
    ipRange?: string;
    networkZone: string;
    type: PostNetworksCreateNetworkRequestSubnetsTypeEnum;
}
export declare class PostNetworksCreateNetworkRequest extends SpeakeasyBase {
    ipRange: string;
    labels?: PostNetworksCreateNetworkRequestLabels;
    name: string;
    routes?: PostNetworksCreateNetworkRequestRoutes[];
    subnets?: PostNetworksCreateNetworkRequestSubnets[];
}
/**
 * Protection configuration for the Network
**/
export declare class PostNetworks201ApplicationJsonNetworkProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare class PostNetworks201ApplicationJsonNetworkRoutes extends SpeakeasyBase {
    destination: string;
    gateway: string;
}
export declare enum PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class PostNetworks201ApplicationJsonNetworkSubnets extends SpeakeasyBase {
    gateway: string;
    ipRange?: string;
    networkZone: string;
    type: PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum;
}
export declare class PostNetworks201ApplicationJsonNetwork extends SpeakeasyBase {
    created: string;
    id: number;
    ipRange: string;
    labels: Map<string, any>;
    loadBalancers?: number[];
    name: string;
    protection: PostNetworks201ApplicationJsonNetworkProtection;
    routes: PostNetworks201ApplicationJsonNetworkRoutes[];
    servers: number[];
    subnets: PostNetworks201ApplicationJsonNetworkSubnets[];
}
export declare class PostNetworks201ApplicationJson extends SpeakeasyBase {
    network?: PostNetworks201ApplicationJsonNetwork;
}
export declare class PostNetworksRequest extends SpeakeasyBase {
    request?: PostNetworksCreateNetworkRequest;
}
export declare class PostNetworksResponse extends SpeakeasyBase {
    contentType: string;
    postNetworks201ApplicationJsonObject?: PostNetworks201ApplicationJson;
    statusCode: number;
}
