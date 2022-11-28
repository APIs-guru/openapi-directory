import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutNetworksIdPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * User-defined labels (key-value pairs)
**/
export declare class PutNetworksIdUpdateNetworkRequestLabels extends SpeakeasyBase {
    labelkey?: string;
}
export declare class PutNetworksIdUpdateNetworkRequest extends SpeakeasyBase {
    labels?: PutNetworksIdUpdateNetworkRequestLabels;
    name?: string;
}
/**
 * Protection configuration for the Network
**/
export declare class PutNetworksId200ApplicationJsonNetworkProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare class PutNetworksId200ApplicationJsonNetworkRoutes extends SpeakeasyBase {
    destination: string;
    gateway: string;
}
export declare enum PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class PutNetworksId200ApplicationJsonNetworkSubnets extends SpeakeasyBase {
    gateway: string;
    ipRange?: string;
    networkZone: string;
    type: PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum;
}
export declare class PutNetworksId200ApplicationJsonNetwork extends SpeakeasyBase {
    created: string;
    id: number;
    ipRange: string;
    labels: Map<string, any>;
    loadBalancers?: number[];
    name: string;
    protection: PutNetworksId200ApplicationJsonNetworkProtection;
    routes: PutNetworksId200ApplicationJsonNetworkRoutes[];
    servers: number[];
    subnets: PutNetworksId200ApplicationJsonNetworkSubnets[];
}
export declare class PutNetworksId200ApplicationJson extends SpeakeasyBase {
    network?: PutNetworksId200ApplicationJsonNetwork;
}
export declare class PutNetworksIdRequest extends SpeakeasyBase {
    pathParams: PutNetworksIdPathParams;
    request?: PutNetworksIdUpdateNetworkRequest;
}
export declare class PutNetworksIdResponse extends SpeakeasyBase {
    contentType: string;
    putNetworksId200ApplicationJsonObject?: PutNetworksId200ApplicationJson;
    statusCode: number;
}
