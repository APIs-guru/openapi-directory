import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutNetworksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PutNetworksIdUpdateNetworkRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PutNetworksIdUpdateNetworkRequestLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelkey" })
  labelkey?: string;
}


export class PutNetworksIdUpdateNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: PutNetworksIdUpdateNetworkRequestLabels;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// PutNetworksId200ApplicationJsonNetworkProtection
/** 
 * Protection configuration for the Network
**/
export class PutNetworksId200ApplicationJsonNetworkProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}


export class PutNetworksId200ApplicationJsonNetworkRoutes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}


export class PutNetworksId200ApplicationJsonNetworkSubnets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;

  @SpeakeasyMetadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum;
}


export class PutNetworksId200ApplicationJsonNetwork extends SpeakeasyBase {
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
  protection: PutNetworksId200ApplicationJsonNetworkProtection;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: PutNetworksId200ApplicationJsonNetworkRoutes })
  routes: PutNetworksId200ApplicationJsonNetworkRoutes[];

  @SpeakeasyMetadata({ data: "json, name=servers" })
  servers: number[];

  @SpeakeasyMetadata({ data: "json, name=subnets", elemType: PutNetworksId200ApplicationJsonNetworkSubnets })
  subnets: PutNetworksId200ApplicationJsonNetworkSubnets[];
}


export class PutNetworksId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: PutNetworksId200ApplicationJsonNetwork;
}


export class PutNetworksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutNetworksIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutNetworksIdUpdateNetworkRequest;
}


export class PutNetworksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putNetworksId200ApplicationJsonObject?: PutNetworksId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
