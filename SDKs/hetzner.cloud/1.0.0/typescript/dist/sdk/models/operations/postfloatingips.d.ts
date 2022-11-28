import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostFloatingIpsCreateFloatingIpRequestTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class PostFloatingIpsCreateFloatingIpRequest extends SpeakeasyBase {
    description?: string;
    homeLocation?: string;
    labels?: Map<string, any>;
    name?: string;
    server?: number;
    type: PostFloatingIpsCreateFloatingIpRequestTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostFloatingIps201ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostFloatingIps201ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostFloatingIps201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIps201ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: PostFloatingIps201ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostFloatingIps201ApplicationJsonActionResources[];
    started: string;
    status: PostFloatingIps201ApplicationJsonActionStatusEnum;
}
export declare class PostFloatingIps201ApplicationJsonFloatingIpDnsPtr extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export declare class PostFloatingIps201ApplicationJsonFloatingIpHomeLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
/**
 * Protection configuration for the Resource
**/
export declare class PostFloatingIps201ApplicationJsonFloatingIpProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum PostFloatingIps201ApplicationJsonFloatingIpTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class PostFloatingIps201ApplicationJsonFloatingIp extends SpeakeasyBase {
    blocked: boolean;
    created: string;
    description: string;
    dnsPtr: PostFloatingIps201ApplicationJsonFloatingIpDnsPtr[];
    homeLocation: PostFloatingIps201ApplicationJsonFloatingIpHomeLocation;
    id: number;
    ip: string;
    labels: Map<string, string>;
    name: string;
    protection: PostFloatingIps201ApplicationJsonFloatingIpProtection;
    server: number;
    type: PostFloatingIps201ApplicationJsonFloatingIpTypeEnum;
}
export declare class PostFloatingIps201ApplicationJson extends SpeakeasyBase {
    action?: PostFloatingIps201ApplicationJsonAction;
    floatingIp: PostFloatingIps201ApplicationJsonFloatingIp;
}
export declare class PostFloatingIpsRequest extends SpeakeasyBase {
    request?: PostFloatingIpsCreateFloatingIpRequest;
}
export declare class PostFloatingIpsResponse extends SpeakeasyBase {
    contentType: string;
    postFloatingIps201ApplicationJsonObject?: PostFloatingIps201ApplicationJson;
    statusCode: number;
}
