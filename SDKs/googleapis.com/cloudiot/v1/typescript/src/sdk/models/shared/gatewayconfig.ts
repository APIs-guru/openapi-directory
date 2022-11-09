import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GatewayConfigGatewayAuthMethodEnum {
    GatewayAuthMethodUnspecified = "GATEWAY_AUTH_METHOD_UNSPECIFIED"
,    AssociationOnly = "ASSOCIATION_ONLY"
,    DeviceAuthTokenOnly = "DEVICE_AUTH_TOKEN_ONLY"
,    AssociationAndDeviceAuthToken = "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"
}

export enum GatewayConfigGatewayTypeEnum {
    GatewayTypeUnspecified = "GATEWAY_TYPE_UNSPECIFIED"
,    Gateway = "GATEWAY"
,    NonGateway = "NON_GATEWAY"
}


// GatewayConfig
/** 
 * Gateway-related configuration and state.
**/
export class GatewayConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gatewayAuthMethod" })
  gatewayAuthMethod?: GatewayConfigGatewayAuthMethodEnum;

  @Metadata({ data: "json, name=gatewayType" })
  gatewayType?: GatewayConfigGatewayTypeEnum;

  @Metadata({ data: "json, name=lastAccessedGatewayId" })
  lastAccessedGatewayId?: string;

  @Metadata({ data: "json, name=lastAccessedGatewayTime" })
  lastAccessedGatewayTime?: string;
}
