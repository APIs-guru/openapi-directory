import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceWlanListsPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceWlanListsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceWlanListsPathParams;
}
export declare class GetNetworkSmDeviceWlanListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmDeviceWlanLists200ApplicationJsonObject?: Map<string, any>;
}
