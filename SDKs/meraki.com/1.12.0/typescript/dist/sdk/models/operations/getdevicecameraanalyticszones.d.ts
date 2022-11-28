import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraAnalyticsZonesPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraAnalyticsZonesRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraAnalyticsZonesPathParams;
}
export declare class GetDeviceCameraAnalyticsZonesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraAnalyticsZones200ApplicationJsonObject?: Map<string, any>;
}
