import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmUserDeviceProfilesPathParams extends SpeakeasyBase {
    networkId: string;
    userId: string;
}
export declare class GetNetworkSmUserDeviceProfilesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmUserDeviceProfilesPathParams;
}
export declare class GetNetworkSmUserDeviceProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmUserDeviceProfiles200ApplicationJsonObject?: Map<string, any>;
}
