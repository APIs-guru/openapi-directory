import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutFloatingIpsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutFloatingIpsIdUpdateFloatingIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutFloatingIpsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutFloatingIpsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutFloatingIpsIdUpdateFloatingIpRequest;
}


export class PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation
/** 
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export class PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation extends SpeakeasyBase {
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


// PutFloatingIpsId200ApplicationJsonFloatingIpProtection
/** 
 * Protection configuration for the Resource
**/
export class PutFloatingIpsId200ApplicationJsonFloatingIpProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum {
    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
}


export class PutFloatingIpsId200ApplicationJsonFloatingIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=dns_ptr", elemType: operations.PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr })
  dnsPtr: PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[];

  @Metadata({ data: "json, name=home_location" })
  homeLocation: PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protection" })
  protection: PutFloatingIpsId200ApplicationJsonFloatingIpProtection;

  @Metadata({ data: "json, name=server" })
  server: number;

  @Metadata({ data: "json, name=type" })
  type: PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum;
}


export class PutFloatingIpsId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=floating_ip" })
  floatingIp: PutFloatingIpsId200ApplicationJsonFloatingIp;
}


export class PutFloatingIpsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putFloatingIpsId200ApplicationJsonObject?: PutFloatingIpsId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
