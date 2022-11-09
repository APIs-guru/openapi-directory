import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostNetworksCreateNetworkRequestLabels
/** 
 * User-defined labels (key-value pairs)
**/
export class PostNetworksCreateNetworkRequestLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelkey" })
  labelkey?: string;
}


export class PostNetworksCreateNetworkRequestRoutes extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: string;

  @Metadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum PostNetworksCreateNetworkRequestSubnetsTypeEnum {
    Cloud = "cloud"
,    Server = "server"
,    Vswitch = "vswitch"
}


export class PostNetworksCreateNetworkRequestSubnets extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;

  @Metadata({ data: "json, name=type" })
  type: PostNetworksCreateNetworkRequestSubnetsTypeEnum;
}


export class PostNetworksCreateNetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_range" })
  ipRange: string;

  @Metadata({ data: "json, name=labels" })
  labels?: PostNetworksCreateNetworkRequestLabels;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=routes", elemType: operations.PostNetworksCreateNetworkRequestRoutes })
  routes?: PostNetworksCreateNetworkRequestRoutes[];

  @Metadata({ data: "json, name=subnets", elemType: operations.PostNetworksCreateNetworkRequestSubnets })
  subnets?: PostNetworksCreateNetworkRequestSubnets[];
}


export class PostNetworksRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostNetworksCreateNetworkRequest;
}


// PostNetworks201ApplicationJsonNetworkProtection
/** 
 * Protection configuration for the Network
**/
export class PostNetworks201ApplicationJsonNetworkProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}


export class PostNetworks201ApplicationJsonNetworkRoutes extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: string;

  @Metadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum {
    Cloud = "cloud"
,    Server = "server"
,    Vswitch = "vswitch"
}


export class PostNetworks201ApplicationJsonNetworkSubnets extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateway" })
  gateway: string;

  @Metadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;

  @Metadata({ data: "json, name=type" })
  type: PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum;
}


export class PostNetworks201ApplicationJsonNetwork extends SpeakeasyBase {
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
  protection: PostNetworks201ApplicationJsonNetworkProtection;

  @Metadata({ data: "json, name=routes", elemType: operations.PostNetworks201ApplicationJsonNetworkRoutes })
  routes: PostNetworks201ApplicationJsonNetworkRoutes[];

  @Metadata({ data: "json, name=servers" })
  servers: number[];

  @Metadata({ data: "json, name=subnets", elemType: operations.PostNetworks201ApplicationJsonNetworkSubnets })
  subnets: PostNetworks201ApplicationJsonNetworkSubnets[];
}


export class PostNetworks201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: PostNetworks201ApplicationJsonNetwork;
}


export class PostNetworksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postNetworks201ApplicationJsonObject?: PostNetworks201ApplicationJson;

  @Metadata()
  statusCode: number;
}
