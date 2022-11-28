import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLocationsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetLocationsId200ApplicationJsonLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
export declare class GetLocationsId200ApplicationJson extends SpeakeasyBase {
    location: GetLocationsId200ApplicationJsonLocation;
}
export declare class GetLocationsIdRequest extends SpeakeasyBase {
    pathParams: GetLocationsIdPathParams;
}
export declare class GetLocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    getLocationsId200ApplicationJsonObject?: GetLocationsId200ApplicationJson;
    statusCode: number;
}
