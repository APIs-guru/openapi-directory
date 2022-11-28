import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceNetworkAdaptersPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceNetworkAdaptersRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceNetworkAdaptersPathParams;
}
export declare class GetNetworkSmDeviceNetworkAdaptersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmDeviceNetworkAdapters200ApplicationJsonObject?: Map<string, any>;
}
