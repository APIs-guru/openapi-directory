import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceDeviceProfilesPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceDeviceProfilesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceDeviceProfilesPathParams;
}
export declare class GetNetworkSmDeviceDeviceProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmDeviceDeviceProfiles200ApplicationJsonObject?: Map<string, any>;
}
