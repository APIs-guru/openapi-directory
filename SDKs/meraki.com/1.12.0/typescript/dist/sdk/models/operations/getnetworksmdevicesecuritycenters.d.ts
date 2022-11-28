import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceSecurityCentersPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceSecurityCentersRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceSecurityCentersPathParams;
}
export declare class GetNetworkSmDeviceSecurityCentersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmDeviceSecurityCenters200ApplicationJsonObject?: Map<string, any>;
}
