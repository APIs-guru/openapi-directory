import { SpeakeasyBase } from "../../../internal/utils";
export declare class LockNetworkSmDevicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class LockNetworkSmDevicesRequestBody extends SpeakeasyBase {
    ids?: string[];
    pin?: number;
    scope?: string[];
    serials?: string[];
    wifiMacs?: string[];
}
export declare class LockNetworkSmDevicesRequest extends SpeakeasyBase {
    pathParams: LockNetworkSmDevicesPathParams;
    request?: LockNetworkSmDevicesRequestBody;
}
export declare class LockNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lockNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
