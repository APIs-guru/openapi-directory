import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworksIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetNetworksIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworksIdPathParams;
}


// GetNetworksId200ApplicationJsonNetworkProtection
/** 
 * Protection configuration for the Network
**/
export class GetNetworksId200ApplicationJsonNetworkProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}


export class GetNetworksId200ApplicationJsonNetworkRoutes extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: string;

  @Metadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum {
    Cloud = "cloud"
,    Server = "server"
,    Vswitch = "vswitch"
}


export class GetNetworksId200ApplicationJsonNetworkSubnets extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateway" })
  gateway: string;

  @Metadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;

  @Metadata({ data: "json, name=type" })
  type: GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum;
}


export class GetNetworksId200ApplicationJsonNetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ip_range" })
  ipRange: string;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, any>;

  @Metadata({ data: "json, name=load_balancers" })
  loadBalancers?: number[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protection" })
  protection: GetNetworksId200ApplicationJsonNetworkProtection;

  @Metadata({ data: "json, name=routes", elemType: operations.GetNetworksId200ApplicationJsonNetworkRoutes })
  routes: GetNetworksId200ApplicationJsonNetworkRoutes[];

  @Metadata({ data: "json, name=servers" })
  servers: number[];

  @Metadata({ data: "json, name=subnets", elemType: operations.GetNetworksId200ApplicationJsonNetworkSubnets })
  subnets: GetNetworksId200ApplicationJsonNetworkSubnets[];
}


export class GetNetworksId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: GetNetworksId200ApplicationJsonNetwork;
}


export class GetNetworksIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNetworksId200ApplicationJsonObject?: GetNetworksId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
