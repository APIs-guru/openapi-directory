import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetNetworksId200ApplicationJsonNetworkProtection
/** 
 * Protection configuration for the Network
**/
export class GetNetworksId200ApplicationJsonNetworkProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}


export class GetNetworksId200ApplicationJsonNetworkRoutes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}


export class GetNetworksId200ApplicationJsonNetworkSubnets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;

  @SpeakeasyMetadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum;
}


export class GetNetworksId200ApplicationJsonNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ip_range" })
  ipRange: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=load_balancers" })
  loadBalancers?: number[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetNetworksId200ApplicationJsonNetworkProtection;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: GetNetworksId200ApplicationJsonNetworkRoutes })
  routes: GetNetworksId200ApplicationJsonNetworkRoutes[];

  @SpeakeasyMetadata({ data: "json, name=servers" })
  servers: number[];

  @SpeakeasyMetadata({ data: "json, name=subnets", elemType: GetNetworksId200ApplicationJsonNetworkSubnets })
  subnets: GetNetworksId200ApplicationJsonNetworkSubnets[];
}


export class GetNetworksId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: GetNetworksId200ApplicationJsonNetwork;
}


export class GetNetworksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworksIdPathParams;
}


export class GetNetworksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getNetworksId200ApplicationJsonObject?: GetNetworksId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
