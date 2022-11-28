import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDatacentersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetDatacentersId200ApplicationJsonDatacenterLocation extends SpeakeasyBase {
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
export declare class GetDatacentersId200ApplicationJsonDatacenterServerTypes extends SpeakeasyBase {
    available: number[];
    availableForMigration: number[];
    supported: number[];
}
export declare class GetDatacentersId200ApplicationJsonDatacenter extends SpeakeasyBase {
    description: string;
    id: number;
    location: GetDatacentersId200ApplicationJsonDatacenterLocation;
    name: string;
    serverTypes: GetDatacentersId200ApplicationJsonDatacenterServerTypes;
}
export declare class GetDatacentersId200ApplicationJson extends SpeakeasyBase {
    datacenter: GetDatacentersId200ApplicationJsonDatacenter;
}
export declare class GetDatacentersIdRequest extends SpeakeasyBase {
    pathParams: GetDatacentersIdPathParams;
}
export declare class GetDatacentersIdResponse extends SpeakeasyBase {
    contentType: string;
    getDatacentersId200ApplicationJsonObject?: GetDatacentersId200ApplicationJson;
    statusCode: number;
}
