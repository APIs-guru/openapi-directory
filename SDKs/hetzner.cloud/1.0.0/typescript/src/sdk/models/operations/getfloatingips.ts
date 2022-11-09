import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFloatingIpsSortEnum {
    Id = "id"
,    IdAsc = "id:asc"
,    IdDesc = "id:desc"
,    Created = "created"
,    CreatedAsc = "created:asc"
,    CreatedDesc = "created:desc"
}


export class GetFloatingIpsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFloatingIpsSortEnum;
}


export class GetFloatingIpsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFloatingIpsQueryParams;
}


export class GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation
/** 
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export class GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=latitude" })
  latitude: number;

  @Metadata({ data: "json, name=longitude" })
  longitude: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;
}


// GetFloatingIps200ApplicationJsonFloatingIpsProtection
/** 
 * Protection configuration for the Resource
**/
export class GetFloatingIps200ApplicationJsonFloatingIpsProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum {
    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
}


export class GetFloatingIps200ApplicationJsonFloatingIps extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=dns_ptr", elemType: operations.GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr })
  dnsPtr: GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr[];

  @Metadata({ data: "json, name=home_location" })
  homeLocation: GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protection" })
  protection: GetFloatingIps200ApplicationJsonFloatingIpsProtection;

  @Metadata({ data: "json, name=server" })
  server: number;

  @Metadata({ data: "json, name=type" })
  type: GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum;
}


export class GetFloatingIps200ApplicationJsonMetaPagination extends SpeakeasyBase {
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


export class GetFloatingIps200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetFloatingIps200ApplicationJsonMetaPagination;
}


export class GetFloatingIps200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=floating_ips", elemType: operations.GetFloatingIps200ApplicationJsonFloatingIps })
  floatingIps: GetFloatingIps200ApplicationJsonFloatingIps[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetFloatingIps200ApplicationJsonMeta;
}


export class GetFloatingIpsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getFloatingIps200ApplicationJsonObject?: GetFloatingIps200ApplicationJson;

  @Metadata()
  statusCode: number;
}
