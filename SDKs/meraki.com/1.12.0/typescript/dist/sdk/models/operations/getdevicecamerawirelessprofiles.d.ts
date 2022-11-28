import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraWirelessProfilesPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraWirelessProfilesRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraWirelessProfilesPathParams;
}
export declare class GetDeviceCameraWirelessProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraWirelessProfiles200ApplicationJsonObject?: Map<string, any>;
}
