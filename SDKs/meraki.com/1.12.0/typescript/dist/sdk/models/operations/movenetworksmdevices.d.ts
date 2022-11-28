import { SpeakeasyBase } from "../../../internal/utils";
export declare class MoveNetworkSmDevicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class MoveNetworkSmDevicesRequestBody extends SpeakeasyBase {
    ids?: string[];
    newNetwork: string;
    scope?: string[];
    serials?: string[];
    wifiMacs?: string[];
}
export declare class MoveNetworkSmDevicesRequest extends SpeakeasyBase {
    pathParams: MoveNetworkSmDevicesPathParams;
    request: MoveNetworkSmDevicesRequestBody;
}
export declare class MoveNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    moveNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
