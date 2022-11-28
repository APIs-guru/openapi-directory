import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceCameraVideoSettingsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class UpdateDeviceCameraVideoSettingsRequestBody extends SpeakeasyBase {
    externalRtspEnabled?: boolean;
}
export declare class UpdateDeviceCameraVideoSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceCameraVideoSettingsPathParams;
    request?: UpdateDeviceCameraVideoSettingsRequestBody;
}
export declare class UpdateDeviceCameraVideoSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceCameraVideoSettings200ApplicationJsonObject?: Map<string, any>;
}
