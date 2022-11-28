import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraQualityAndRetentionPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraQualityAndRetentionRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraQualityAndRetentionPathParams;
}
export declare class GetDeviceCameraQualityAndRetentionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraQualityAndRetention200ApplicationJsonObject?: Map<string, any>;
}
