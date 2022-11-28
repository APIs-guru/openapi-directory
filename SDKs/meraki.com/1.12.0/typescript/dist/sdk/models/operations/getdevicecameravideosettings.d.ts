import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraVideoSettingsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraVideoSettingsRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraVideoSettingsPathParams;
}
export declare class GetDeviceCameraVideoSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraVideoSettings200ApplicationJsonObject?: Map<string, any>;
}
