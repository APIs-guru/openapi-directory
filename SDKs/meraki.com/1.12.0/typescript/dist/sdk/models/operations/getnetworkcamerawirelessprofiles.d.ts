import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkCameraWirelessProfilesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCameraWirelessProfilesRequest extends SpeakeasyBase {
    pathParams: GetNetworkCameraWirelessProfilesPathParams;
}
export declare class GetNetworkCameraWirelessProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkCameraWirelessProfiles200ApplicationJsonObject?: Map<string, any>;
}
