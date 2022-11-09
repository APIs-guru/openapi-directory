import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostFloatingIpsCreateFloatingIpRequestTypeEnum {
    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
}


export class PostFloatingIpsCreateFloatingIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=home_location" })
  homeLocation?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=server" })
  server?: number;

  @Metadata({ data: "json, name=type" })
  type: PostFloatingIpsCreateFloatingIpRequestTypeEnum;
}


export class PostFloatingIpsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostFloatingIpsCreateFloatingIpRequest;
}


// PostFloatingIps201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIps201ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIps201ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIps201ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostFloatingIps201ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostFloatingIps201ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostFloatingIps201ApplicationJsonActionResources })
  resources: PostFloatingIps201ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostFloatingIps201ApplicationJsonActionStatusEnum;
}


export class PostFloatingIps201ApplicationJsonFloatingIpDnsPtr extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PostFloatingIps201ApplicationJsonFloatingIpHomeLocation
/** 
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export class PostFloatingIps201ApplicationJsonFloatingIpHomeLocation extends SpeakeasyBase {
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


// PostFloatingIps201ApplicationJsonFloatingIpProtection
/** 
 * Protection configuration for the Resource
**/
export class PostFloatingIps201ApplicationJsonFloatingIpProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete: boolean;
}

export enum PostFloatingIps201ApplicationJsonFloatingIpTypeEnum {
    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
}


export class PostFloatingIps201ApplicationJsonFloatingIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked: boolean;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=dns_ptr", elemType: operations.PostFloatingIps201ApplicationJsonFloatingIpDnsPtr })
  dnsPtr: PostFloatingIps201ApplicationJsonFloatingIpDnsPtr[];

  @Metadata({ data: "json, name=home_location" })
  homeLocation: PostFloatingIps201ApplicationJsonFloatingIpHomeLocation;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protection" })
  protection: PostFloatingIps201ApplicationJsonFloatingIpProtection;

  @Metadata({ data: "json, name=server" })
  server: number;

  @Metadata({ data: "json, name=type" })
  type: PostFloatingIps201ApplicationJsonFloatingIpTypeEnum;
}


export class PostFloatingIps201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: PostFloatingIps201ApplicationJsonAction;

  @Metadata({ data: "json, name=floating_ip" })
  floatingIp: PostFloatingIps201ApplicationJsonFloatingIp;
}


export class PostFloatingIpsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postFloatingIps201ApplicationJsonObject?: PostFloatingIps201ApplicationJson;

  @Metadata()
  statusCode: number;
}
