import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GatewayConfigGatewayAuthMethodEnum {
    GatewayAuthMethodUnspecified = "GATEWAY_AUTH_METHOD_UNSPECIFIED",
    AssociationOnly = "ASSOCIATION_ONLY",
    DeviceAuthTokenOnly = "DEVICE_AUTH_TOKEN_ONLY",
    AssociationAndDeviceAuthToken = "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"
}
export declare enum GatewayConfigGatewayTypeEnum {
    GatewayTypeUnspecified = "GATEWAY_TYPE_UNSPECIFIED",
    Gateway = "GATEWAY",
    NonGateway = "NON_GATEWAY"
}
/**
 * Gateway-related configuration and state.
**/
export declare class GatewayConfig extends SpeakeasyBase {
    gatewayAuthMethod?: GatewayConfigGatewayAuthMethodEnum;
    gatewayType?: GatewayConfigGatewayTypeEnum;
    lastAccessedGatewayId?: string;
    lastAccessedGatewayTime?: string;
}
