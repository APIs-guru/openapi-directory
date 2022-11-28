import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetNetworks200ApplicationJsonMetaPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_page" })
  lastPage: number;

  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page" })
  previousPage: number;

  @SpeakeasyMetadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetNetworks200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetNetworks200ApplicationJsonMetaPagination;
}


// GetNetworks200ApplicationJsonNetworksProtection
/** 
 * Protection configuration for the Network
**/
export class GetNetworks200ApplicationJsonNetworksProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}


export class GetNetworks200ApplicationJsonNetworksRoutes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}


export class GetNetworks200ApplicationJsonNetworksSubnets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;

  @SpeakeasyMetadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum;
}


export class GetNetworks200ApplicationJsonNetworks extends SpeakeasyBase {
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
  protection: GetNetworks200ApplicationJsonNetworksProtection;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: GetNetworks200ApplicationJsonNetworksRoutes })
  routes: GetNetworks200ApplicationJsonNetworksRoutes[];

  @SpeakeasyMetadata({ data: "json, name=servers" })
  servers: number[];

  @SpeakeasyMetadata({ data: "json, name=subnets", elemType: GetNetworks200ApplicationJsonNetworksSubnets })
  subnets: GetNetworks200ApplicationJsonNetworksSubnets[];
}


export class GetNetworks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetNetworks200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: GetNetworks200ApplicationJsonNetworks })
  networks: GetNetworks200ApplicationJsonNetworks[];
}


export class GetNetworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNetworksQueryParams;
}


export class GetNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getNetworks200ApplicationJsonObject?: GetNetworks200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
