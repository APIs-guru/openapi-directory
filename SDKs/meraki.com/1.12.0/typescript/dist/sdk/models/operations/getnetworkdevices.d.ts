import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkDevicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkDevicesRequest extends SpeakeasyBase {
    pathParams: GetNetworkDevicesPathParams;
}
export declare class GetNetworkDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkDevices200ApplicationJsonObject?: Map<string, any>;
}
