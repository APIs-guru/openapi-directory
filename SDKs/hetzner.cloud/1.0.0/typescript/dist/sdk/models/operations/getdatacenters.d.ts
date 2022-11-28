import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDatacentersQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class GetDatacenters200ApplicationJsonDatacentersLocation extends SpeakeasyBase {
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
 * The Server types the Datacenter can handle
**/
export declare class GetDatacenters200ApplicationJsonDatacentersServerTypes extends SpeakeasyBase {
    available: number[];
    availableForMigration: number[];
    supported: number[];
}
export declare class GetDatacenters200ApplicationJsonDatacenters extends SpeakeasyBase {
    description: string;
    id: number;
    location: GetDatacenters200ApplicationJsonDatacentersLocation;
    name: string;
    serverTypes: GetDatacenters200ApplicationJsonDatacentersServerTypes;
}
export declare class GetDatacenters200ApplicationJson extends SpeakeasyBase {
    datacenters: GetDatacenters200ApplicationJsonDatacenters[];
    recommendation: number;
}
export declare class GetDatacentersRequest extends SpeakeasyBase {
    queryParams: GetDatacentersQueryParams;
}
export declare class GetDatacentersResponse extends SpeakeasyBase {
    contentType: string;
    getDatacenters200ApplicationJsonObject?: GetDatacenters200ApplicationJson;
    statusCode: number;
}
