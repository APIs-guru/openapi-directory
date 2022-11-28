import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceCameraWirelessProfilesPathParams extends SpeakeasyBase {
    serial: string;
}
/**
 * The ids of the wireless profile to assign to the given camera
**/
export declare class UpdateDeviceCameraWirelessProfilesRequestBodyIds extends SpeakeasyBase {
    backup?: string;
    primary?: string;
    secondary?: string;
}
export declare class UpdateDeviceCameraWirelessProfilesRequestBody extends SpeakeasyBase {
    ids: UpdateDeviceCameraWirelessProfilesRequestBodyIds;
}
export declare class UpdateDeviceCameraWirelessProfilesRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceCameraWirelessProfilesPathParams;
    request: UpdateDeviceCameraWirelessProfilesRequestBody;
}
export declare class UpdateDeviceCameraWirelessProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceCameraWirelessProfiles200ApplicationJsonObject?: Map<string, any>;
}
