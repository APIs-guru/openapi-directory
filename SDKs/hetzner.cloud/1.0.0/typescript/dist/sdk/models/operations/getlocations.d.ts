import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLocationsQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class GetLocations200ApplicationJsonLocations extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
export declare class GetLocations200ApplicationJson extends SpeakeasyBase {
    locations: GetLocations200ApplicationJsonLocations[];
}
export declare class GetLocationsRequest extends SpeakeasyBase {
    queryParams: GetLocationsQueryParams;
}
export declare class GetLocationsResponse extends SpeakeasyBase {
    contentType: string;
    getLocations200ApplicationJsonObject?: GetLocations200ApplicationJson;
    statusCode: number;
}
