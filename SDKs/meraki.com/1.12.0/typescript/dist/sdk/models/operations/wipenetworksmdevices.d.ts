import { SpeakeasyBase } from "../../../internal/utils";
export declare class WipeNetworkSmDevicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class WipeNetworkSmDevicesRequestBody extends SpeakeasyBase {
    id?: string;
    pin?: number;
    serial?: string;
    wifiMac?: string;
}
export declare class WipeNetworkSmDevicesRequest extends SpeakeasyBase {
    pathParams: WipeNetworkSmDevicesPathParams;
    request?: WipeNetworkSmDevicesRequestBody;
}
export declare class WipeNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wipeNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
