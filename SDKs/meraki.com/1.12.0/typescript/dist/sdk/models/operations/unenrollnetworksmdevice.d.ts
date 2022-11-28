import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnenrollNetworkSmDevicePathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class UnenrollNetworkSmDeviceRequest extends SpeakeasyBase {
    pathParams: UnenrollNetworkSmDevicePathParams;
}
export declare class UnenrollNetworkSmDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unenrollNetworkSmDevice200ApplicationJsonObject?: Map<string, any>;
}
