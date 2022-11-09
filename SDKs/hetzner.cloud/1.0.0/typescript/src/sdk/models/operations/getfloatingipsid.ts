import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFloatingIpsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFloatingIpsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFloatingIpsIdPathParams;
}


export class GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation
/** 
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export class GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation extends SpeakeasyBase {
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


// GetFloatingIpsId200ApplicationJsonFloatingIpProtection
/** 
 * Protection configuration for the Resource
**/
export class GetFloatingIpsId200ApplicationJsonFloatingIpProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum {
    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
}


export class GetFloatingIpsId200ApplicationJsonFloatingIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=dns_ptr", elemType: operations.GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr })
  dnsPtr: GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[];

  @Metadata({ data: "json, name=home_location" })
  homeLocation: GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protection" })
  protection: GetFloatingIpsId200ApplicationJsonFloatingIpProtection;

  @Metadata({ data: "json, name=server" })
  server: number;

  @Metadata({ data: "json, name=type" })
  type: GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum;
}


export class GetFloatingIpsId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=floating_ip" })
  floatingIp: GetFloatingIpsId200ApplicationJsonFloatingIp;
}


export class GetFloatingIpsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getFloatingIpsId200ApplicationJsonObject?: GetFloatingIpsId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
