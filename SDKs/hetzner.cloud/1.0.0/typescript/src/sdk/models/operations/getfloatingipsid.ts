import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFloatingIpsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation
/** 
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export class GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation extends SpeakeasyBase {
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


// GetFloatingIpsId200ApplicationJsonFloatingIpProtection
/** 
 * Protection configuration for the Resource
**/
export class GetFloatingIpsId200ApplicationJsonFloatingIpProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}


export class GetFloatingIpsId200ApplicationJsonFloatingIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr })
  dnsPtr: GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[];

  @SpeakeasyMetadata({ data: "json, name=home_location" })
  homeLocation: GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: GetFloatingIpsId200ApplicationJsonFloatingIpProtection;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum;
}


export class GetFloatingIpsId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floating_ip" })
  floatingIp: GetFloatingIpsId200ApplicationJsonFloatingIp;
}


export class GetFloatingIpsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFloatingIpsIdPathParams;
}


export class GetFloatingIpsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFloatingIpsId200ApplicationJsonObject?: GetFloatingIpsId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
