import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
    networkId: string;
    wirelessProfileId: string;
}
export declare class GetNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
    pathParams: GetNetworkCameraWirelessProfilePathParams;
}
export declare class GetNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkCameraWirelessProfile200ApplicationJsonObject?: Map<string, any>;
}
