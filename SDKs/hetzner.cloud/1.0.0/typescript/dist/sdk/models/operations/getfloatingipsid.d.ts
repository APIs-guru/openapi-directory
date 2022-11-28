import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFloatingIpsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export declare class GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation extends SpeakeasyBase {
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
export declare class GetFloatingIpsId200ApplicationJsonFloatingIpProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class GetFloatingIpsId200ApplicationJsonFloatingIp extends SpeakeasyBase {
    blocked: boolean;
    created: string;
    description: string;
    dnsPtr: GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[];
    homeLocation: GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation;
    id: number;
    ip: string;
    labels: Map<string, string>;
    name: string;
    protection: GetFloatingIpsId200ApplicationJsonFloatingIpProtection;
    server: number;
    type: GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum;
}
export declare class GetFloatingIpsId200ApplicationJson extends SpeakeasyBase {
    floatingIp: GetFloatingIpsId200ApplicationJsonFloatingIp;
}
export declare class GetFloatingIpsIdRequest extends SpeakeasyBase {
    pathParams: GetFloatingIpsIdPathParams;
}
export declare class GetFloatingIpsIdResponse extends SpeakeasyBase {
    contentType: string;
    getFloatingIpsId200ApplicationJsonObject?: GetFloatingIpsId200ApplicationJson;
    statusCode: number;
}
