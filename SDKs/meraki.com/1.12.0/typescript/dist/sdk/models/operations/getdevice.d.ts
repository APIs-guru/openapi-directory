import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDevicePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceRequest extends SpeakeasyBase {
    pathParams: GetDevicePathParams;
}
export declare class GetDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDevice200ApplicationJsonObject?: Map<string, any>;
}
