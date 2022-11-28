import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostNetworksCreateNetworkRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PostNetworksCreateNetworkRequestLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelkey" })
  labelkey?: string;
}


export class PostNetworksCreateNetworkRequestRoutes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum PostNetworksCreateNetworkRequestSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}


export class PostNetworksCreateNetworkRequestSubnets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostNetworksCreateNetworkRequestSubnetsTypeEnum;
}


export class PostNetworksCreateNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_range" })
  ipRange: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: PostNetworksCreateNetworkRequestLabels;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: PostNetworksCreateNetworkRequestRoutes })
  routes?: PostNetworksCreateNetworkRequestRoutes[];

  @SpeakeasyMetadata({ data: "json, name=subnets", elemType: PostNetworksCreateNetworkRequestSubnets })
  subnets?: PostNetworksCreateNetworkRequestSubnets[];
}


// PostNetworks201ApplicationJsonNetworkProtection
/** 
 * Protection configuration for the Network
**/
export class PostNetworks201ApplicationJsonNetworkProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}


export class PostNetworks201ApplicationJsonNetworkRoutes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}


export class PostNetworks201ApplicationJsonNetworkSubnets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;

  @SpeakeasyMetadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum;
}


export class PostNetworks201ApplicationJsonNetwork extends SpeakeasyBase {
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
  protection: PostNetworks201ApplicationJsonNetworkProtection;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: PostNetworks201ApplicationJsonNetworkRoutes })
  routes: PostNetworks201ApplicationJsonNetworkRoutes[];

  @SpeakeasyMetadata({ data: "json, name=servers" })
  servers: number[];

  @SpeakeasyMetadata({ data: "json, name=subnets", elemType: PostNetworks201ApplicationJsonNetworkSubnets })
  subnets: PostNetworks201ApplicationJsonNetworkSubnets[];
}


export class PostNetworks201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: PostNetworks201ApplicationJsonNetwork;
}


export class PostNetworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostNetworksCreateNetworkRequest;
}


export class PostNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postNetworks201ApplicationJsonObject?: PostNetworks201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
