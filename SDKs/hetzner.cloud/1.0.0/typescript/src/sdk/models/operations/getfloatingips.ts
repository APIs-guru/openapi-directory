import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFloatingIpsSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}


export class GetFloatingIpsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFloatingIpsSortEnum;
}


export class GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation
/** 
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export class GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;
}


// GetFloatingIps200ApplicationJsonFloatingIpsProtection
/** 
 * Protection configuration for the Resource
**/
export class GetFloatingIps200ApplicationJsonFloatingIpsProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}


export class GetFloatingIps200ApplicationJsonFloatingIps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr })
  dnsPtr: GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr[];

  @SpeakeasyMetadata({ data: "json, name=home_location" })
  homeLocation: GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetFloatingIps200ApplicationJsonFloatingIpsProtection;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum;
}


export class GetFloatingIps200ApplicationJsonMetaPagination extends SpeakeasyBase {
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


export class GetFloatingIps200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetFloatingIps200ApplicationJsonMetaPagination;
}


export class GetFloatingIps200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floating_ips", elemType: GetFloatingIps200ApplicationJsonFloatingIps })
  floatingIps: GetFloatingIps200ApplicationJsonFloatingIps[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetFloatingIps200ApplicationJsonMeta;
}


export class GetFloatingIpsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFloatingIpsQueryParams;
}


export class GetFloatingIpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFloatingIps200ApplicationJsonObject?: GetFloatingIps200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
