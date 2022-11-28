import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraAnalyticsRecentPathParams extends SpeakeasyBase {
    serial: string;
}
export declare enum GetDeviceCameraAnalyticsRecentObjectTypeEnum {
    Person = "person",
    Vehicle = "vehicle"
}
export declare class GetDeviceCameraAnalyticsRecentQueryParams extends SpeakeasyBase {
    objectType?: GetDeviceCameraAnalyticsRecentObjectTypeEnum;
}
export declare class GetDeviceCameraAnalyticsRecentRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraAnalyticsRecentPathParams;
    queryParams: GetDeviceCameraAnalyticsRecentQueryParams;
}
export declare class GetDeviceCameraAnalyticsRecentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraAnalyticsRecent200ApplicationJsonObject?: Map<string, any>;
}
