import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetServerTypesQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare enum GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}
/**
 * Hourly costs for a Server type in this Location
**/
export declare class GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly extends SpeakeasyBase {
    gross: string;
    net: string;
}
/**
 * Monthly costs for a Server type in this Location
**/
export declare class GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly extends SpeakeasyBase {
    gross: string;
    net: string;
}
export declare class GetServerTypes200ApplicationJsonServerTypesPrices extends SpeakeasyBase {
    location: string;
    priceHourly: GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly;
    priceMonthly: GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly;
}
export declare enum GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum {
    Local = "local",
    Network = "network"
}
export declare class GetServerTypes200ApplicationJsonServerTypes extends SpeakeasyBase {
    cores: number;
    cpuType: GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum;
    deprecated: boolean;
    description: string;
    disk: number;
    id: number;
    memory: number;
    name: string;
    prices: GetServerTypes200ApplicationJsonServerTypesPrices[];
    storageType: GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum;
}
export declare class GetServerTypes200ApplicationJson extends SpeakeasyBase {
    serverTypes: GetServerTypes200ApplicationJsonServerTypes[];
}
export declare class GetServerTypesRequest extends SpeakeasyBase {
    queryParams: GetServerTypesQueryParams;
}
export declare class GetServerTypesResponse extends SpeakeasyBase {
    contentType: string;
    getServerTypes200ApplicationJsonObject?: GetServerTypes200ApplicationJson;
    statusCode: number;
}
