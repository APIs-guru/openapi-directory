import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutFloatingIpsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutFloatingIpsIdUpdateFloatingIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation
/** 
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export class PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation extends SpeakeasyBase {
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


// PutFloatingIpsId200ApplicationJsonFloatingIpProtection
/** 
 * Protection configuration for the Resource
**/
export class PutFloatingIpsId200ApplicationJsonFloatingIpProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}


export class PutFloatingIpsId200ApplicationJsonFloatingIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr })
  dnsPtr: PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[];

  @SpeakeasyMetadata({ data: "json, name=home_location" })
  homeLocation: PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PutFloatingIpsId200ApplicationJsonFloatingIpProtection;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum;
}


export class PutFloatingIpsId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floating_ip" })
  floatingIp: PutFloatingIpsId200ApplicationJsonFloatingIp;
}


export class PutFloatingIpsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutFloatingIpsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutFloatingIpsIdUpdateFloatingIpRequest;
}


export class PutFloatingIpsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putFloatingIpsId200ApplicationJsonObject?: PutFloatingIpsId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
