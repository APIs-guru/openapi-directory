import { SpeakeasyBase } from "../../../internal/utils";
export declare class RebootDevicePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class RebootDeviceRequest extends SpeakeasyBase {
    pathParams: RebootDevicePathParams;
}
export declare class RebootDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rebootDevice202ApplicationJsonObject?: Map<string, any>;
}
