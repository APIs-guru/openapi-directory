import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraAnalyticsLivePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraAnalyticsLiveRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraAnalyticsLivePathParams;
}
export declare class GetDeviceCameraAnalyticsLiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraAnalyticsLive200ApplicationJsonObject?: Map<string, any>;
}
