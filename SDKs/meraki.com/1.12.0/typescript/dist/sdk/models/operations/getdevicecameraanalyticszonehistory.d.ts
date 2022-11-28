import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraAnalyticsZoneHistoryPathParams extends SpeakeasyBase {
    serial: string;
    zoneId: string;
}
export declare enum GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum {
    Person = "person",
    Vehicle = "vehicle"
}
export declare class GetDeviceCameraAnalyticsZoneHistoryQueryParams extends SpeakeasyBase {
    objectType?: GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;
    resolution?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetDeviceCameraAnalyticsZoneHistoryRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraAnalyticsZoneHistoryPathParams;
    queryParams: GetDeviceCameraAnalyticsZoneHistoryQueryParams;
}
export declare class GetDeviceCameraAnalyticsZoneHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraAnalyticsZoneHistory200ApplicationJsonObject?: Map<string, any>;
}
