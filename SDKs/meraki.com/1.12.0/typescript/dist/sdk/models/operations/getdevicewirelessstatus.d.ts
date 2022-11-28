import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceWirelessStatusPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceWirelessStatusRequest extends SpeakeasyBase {
    pathParams: GetDeviceWirelessStatusPathParams;
}
export declare class GetDeviceWirelessStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceWirelessStatus200ApplicationJsonObject?: Map<string, any>;
}
