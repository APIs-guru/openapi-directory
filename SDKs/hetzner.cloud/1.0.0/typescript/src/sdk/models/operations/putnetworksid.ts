import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutNetworksIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PutNetworksIdUpdateNetworkRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PutNetworksIdUpdateNetworkRequestLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelkey" })
  labelkey?: string;
}


export class PutNetworksIdUpdateNetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: PutNetworksIdUpdateNetworkRequestLabels;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutNetworksIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutNetworksIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutNetworksIdUpdateNetworkRequest;
}


// PutNetworksId200ApplicationJsonNetworkProtection
/** 
 * Protection configuration for the Network
**/
export class PutNetworksId200ApplicationJsonNetworkProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}


export class PutNetworksId200ApplicationJsonNetworkRoutes extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: string;

  @Metadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum {
    Cloud = "cloud"
,    Server = "server"
,    Vswitch = "vswitch"
}


export class PutNetworksId200ApplicationJsonNetworkSubnets extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateway" })
  gateway: string;

  @Metadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;

  @Metadata({ data: "json, name=type" })
  type: PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum;
}


export class PutNetworksId200ApplicationJsonNetwork extends SpeakeasyBase {
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
  protection: PutNetworksId200ApplicationJsonNetworkProtection;

  @Metadata({ data: "json, name=routes", elemType: operations.PutNetworksId200ApplicationJsonNetworkRoutes })
  routes: PutNetworksId200ApplicationJsonNetworkRoutes[];

  @Metadata({ data: "json, name=servers" })
  servers: number[];

  @Metadata({ data: "json, name=subnets", elemType: operations.PutNetworksId200ApplicationJsonNetworkSubnets })
  subnets: PutNetworksId200ApplicationJsonNetworkSubnets[];
}


export class PutNetworksId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: PutNetworksId200ApplicationJsonNetwork;
}


export class PutNetworksIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putNetworksId200ApplicationJsonObject?: PutNetworksId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
