import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OpenMesh = "OPEN_MESH",
    SecureWebGateway = "SECURE_WEB_GATEWAY"
}


// Gateway
/** 
 * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
**/
export class Gateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: number[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=serverTlsPolicy" })
  serverTlsPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GatewayTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GatewayInput
/** 
 * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
**/
export class GatewayInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: number[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=serverTlsPolicy" })
  serverTlsPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GatewayTypeEnum;
}
