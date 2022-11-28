import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceRestrictionsPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceRestrictionsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceRestrictionsPathParams;
}
export declare class GetNetworkSmDeviceRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmDeviceRestrictions200ApplicationJsonObject?: Map<string, any>;
}
