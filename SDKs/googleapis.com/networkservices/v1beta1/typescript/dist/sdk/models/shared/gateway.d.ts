import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OpenMesh = "OPEN_MESH",
    SecureWebGateway = "SECURE_WEB_GATEWAY"
}
/**
 * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
**/
export declare class GatewayInput extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    ports?: number[];
    scope?: string;
    serverTlsPolicy?: string;
    type?: GatewayTypeEnum;
}
/**
 * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
**/
export declare class Gateway extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    ports?: number[];
    scope?: string;
    selfLink?: string;
    serverTlsPolicy?: string;
    type?: GatewayTypeEnum;
    updateTime?: string;
}
