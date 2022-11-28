import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceSoftwaresPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceSoftwaresRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceSoftwaresPathParams;
}
export declare class GetNetworkSmDeviceSoftwaresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmDeviceSoftwares200ApplicationJsonObject?: Map<string, any>;
}
