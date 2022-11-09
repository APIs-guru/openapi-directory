import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    OpenMesh = "OPEN_MESH"
,    SecureWebGateway = "SECURE_WEB_GATEWAY"
}


// Gateway
/** 
 * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
**/
export class Gateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ports" })
  ports?: number[];

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=serverTlsPolicy" })
  serverTlsPolicy?: string;

  @Metadata({ data: "json, name=type" })
  type?: GatewayTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
