import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutFloatingIpsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutFloatingIpsIdUpdateFloatingIpRequest extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, any>;
    name?: string;
}
export declare class PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export declare class PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation extends SpeakeasyBase {
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
export declare class PutFloatingIpsId200ApplicationJsonFloatingIpProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class PutFloatingIpsId200ApplicationJsonFloatingIp extends SpeakeasyBase {
    blocked: boolean;
    created: string;
    description: string;
    dnsPtr: PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[];
    homeLocation: PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation;
    id: number;
    ip: string;
    labels: Map<string, string>;
    name: string;
    protection: PutFloatingIpsId200ApplicationJsonFloatingIpProtection;
    server: number;
    type: PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum;
}
export declare class PutFloatingIpsId200ApplicationJson extends SpeakeasyBase {
    floatingIp: PutFloatingIpsId200ApplicationJsonFloatingIp;
}
export declare class PutFloatingIpsIdRequest extends SpeakeasyBase {
    pathParams: PutFloatingIpsIdPathParams;
    request?: PutFloatingIpsIdUpdateFloatingIpRequest;
}
export declare class PutFloatingIpsIdResponse extends SpeakeasyBase {
    contentType: string;
    putFloatingIpsId200ApplicationJsonObject?: PutFloatingIpsId200ApplicationJson;
    statusCode: number;
}
