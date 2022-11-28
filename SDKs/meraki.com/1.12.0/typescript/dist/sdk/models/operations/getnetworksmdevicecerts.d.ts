import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceCertsPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceCertsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceCertsPathParams;
}
export declare class GetNetworkSmDeviceCertsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmDeviceCerts200ApplicationJsonObject?: Map<string, any>;
}
