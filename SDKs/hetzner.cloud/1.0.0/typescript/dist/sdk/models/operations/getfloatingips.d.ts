import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetFloatingIpsSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
export declare class GetFloatingIpsQueryParams extends SpeakeasyBase {
    labelSelector?: string;
    name?: string;
    sort?: GetFloatingIpsSortEnum;
}
export declare class GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
export declare class GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation extends SpeakeasyBase {
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
export declare class GetFloatingIps200ApplicationJsonFloatingIpsProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare class GetFloatingIps200ApplicationJsonFloatingIps extends SpeakeasyBase {
    blocked: boolean;
    created: string;
    description: string;
    dnsPtr: GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr[];
    homeLocation: GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation;
    id: number;
    ip: string;
    labels: Map<string, string>;
    name: string;
    protection: GetFloatingIps200ApplicationJsonFloatingIpsProtection;
    server: number;
    type: GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum;
}
export declare class GetFloatingIps200ApplicationJsonMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetFloatingIps200ApplicationJsonMeta extends SpeakeasyBase {
    pagination: GetFloatingIps200ApplicationJsonMetaPagination;
}
export declare class GetFloatingIps200ApplicationJson extends SpeakeasyBase {
    floatingIps: GetFloatingIps200ApplicationJsonFloatingIps[];
    meta?: GetFloatingIps200ApplicationJsonMeta;
}
export declare class GetFloatingIpsRequest extends SpeakeasyBase {
    queryParams: GetFloatingIpsQueryParams;
}
export declare class GetFloatingIpsResponse extends SpeakeasyBase {
    contentType: string;
    getFloatingIps200ApplicationJsonObject?: GetFloatingIps200ApplicationJson;
    statusCode: number;
}
