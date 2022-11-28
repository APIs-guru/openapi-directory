import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetServerTypesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
**/
export declare class GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Server type in this Location
**/
export declare class GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetServerTypesId200ApplicationJsonServerTypePrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly;
    priceMonthly: GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly;
}
export declare enum GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}
export declare class GetServerTypesId200ApplicationJsonServerType extends SpeakeasyBase {
    cores: number;
    cpuType: GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum;
    deprecated: boolean;
    description: string;
    disk: number;
    id: number;
    memory: number;
    name: string;
    prices: GetServerTypesId200ApplicationJsonServerTypePrices[];
    storageType: GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum;
}
export declare class GetServerTypesId200ApplicationJson extends SpeakeasyBase {
    serverType: GetServerTypesId200ApplicationJsonServerType;
}
export declare class GetServerTypesIdRequest extends SpeakeasyBase {
    pathParams: GetServerTypesIdPathParams;
}
export declare class GetServerTypesIdResponse extends SpeakeasyBase {
    contentType: string;
    getServerTypesId200ApplicationJsonObject?: GetServerTypesId200ApplicationJson;
    statusCode: number;
}
