import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetNetworksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNetworksQueryParams;
}


export class GetNetworks200ApplicationJsonMetaPagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_page" })
  lastPage: number;

  @Metadata({ data: "json, name=next_page" })
  nextPage: number;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=per_page" })
  perPage: number;

  @Metadata({ data: "json, name=previous_page" })
  previousPage: number;

  @Metadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetNetworks200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetNetworks200ApplicationJsonMetaPagination;
}


// GetNetworks200ApplicationJsonNetworksProtection
/** 
 * Protection configuration for the Network
**/
export class GetNetworks200ApplicationJsonNetworksProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}


export class GetNetworks200ApplicationJsonNetworksRoutes extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: string;

  @Metadata({ data: "json, name=gateway" })
  gateway: string;
}

export enum GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum {
    Cloud = "cloud"
,    Server = "server"
,    Vswitch = "vswitch"
}


export class GetNetworks200ApplicationJsonNetworksSubnets extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateway" })
  gateway: string;

  @Metadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;

  @Metadata({ data: "json, name=type" })
  type: GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum;
}


export class GetNetworks200ApplicationJsonNetworks extends SpeakeasyBase {
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
  protection: GetNetworks200ApplicationJsonNetworksProtection;

  @Metadata({ data: "json, name=routes", elemType: operations.GetNetworks200ApplicationJsonNetworksRoutes })
  routes: GetNetworks200ApplicationJsonNetworksRoutes[];

  @Metadata({ data: "json, name=servers" })
  servers: number[];

  @Metadata({ data: "json, name=subnets", elemType: operations.GetNetworks200ApplicationJsonNetworksSubnets })
  subnets: GetNetworks200ApplicationJsonNetworksSubnets[];
}


export class GetNetworks200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: GetNetworks200ApplicationJsonMeta;

  @Metadata({ data: "json, name=networks", elemType: operations.GetNetworks200ApplicationJsonNetworks })
  networks: GetNetworks200ApplicationJsonNetworks[];
}


export class GetNetworksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNetworks200ApplicationJsonObject?: GetNetworks200ApplicationJson;

  @Metadata()
  statusCode: number;
}
