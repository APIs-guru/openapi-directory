import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostFloatingIpsCreateFloatingIpRequestTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}


export class PostFloatingIpsCreateFloatingIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=home_location" })
  homeLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostFloatingIpsCreateFloatingIpRequestTypeEnum;
}


// PostFloatingIps201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIps201ApplicationJsonActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIps201ApplicationJsonActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIps201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostFloatingIps201ApplicationJsonAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostFloatingIps201ApplicationJsonActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIps201ApplicationJsonActionResources })
  resources: PostFloatingIps201ApplicationJsonActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostFloatingIps201ApplicationJsonActionStatusEnum;
}


export class PostFloatingIps201ApplicationJsonFloatingIpDnsPtr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostFloatingIps201ApplicationJsonFloatingIpHomeLocation
/** 
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export class PostFloatingIps201ApplicationJsonFloatingIpHomeLocation extends SpeakeasyBase {
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


// PostFloatingIps201ApplicationJsonFloatingIpProtection
/** 
 * Protection configuration for the Resource
**/
export class PostFloatingIps201ApplicationJsonFloatingIpProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PostFloatingIps201ApplicationJsonFloatingIpTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}


export class PostFloatingIps201ApplicationJsonFloatingIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: PostFloatingIps201ApplicationJsonFloatingIpDnsPtr })
  dnsPtr: PostFloatingIps201ApplicationJsonFloatingIpDnsPtr[];

  @SpeakeasyMetadata({ data: "json, name=home_location" })
  homeLocation: PostFloatingIps201ApplicationJsonFloatingIpHomeLocation;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: PostFloatingIps201ApplicationJsonFloatingIpProtection;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostFloatingIps201ApplicationJsonFloatingIpTypeEnum;
}


export class PostFloatingIps201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: PostFloatingIps201ApplicationJsonAction;

  @SpeakeasyMetadata({ data: "json, name=floating_ip" })
  floatingIp: PostFloatingIps201ApplicationJsonFloatingIp;
}


export class PostFloatingIpsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostFloatingIpsCreateFloatingIpRequest;
}


export class PostFloatingIpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postFloatingIps201ApplicationJsonObject?: PostFloatingIps201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
