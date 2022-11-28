import { SpeakeasyBase } from "../../../internal/utils";
export declare class BlinkDeviceLedsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class BlinkDeviceLedsRequestBody extends SpeakeasyBase {
    duration?: number;
    duty?: number;
    period?: number;
}
export declare class BlinkDeviceLedsRequest extends SpeakeasyBase {
    pathParams: BlinkDeviceLedsPathParams;
    request?: BlinkDeviceLedsRequestBody;
}
export declare class BlinkDeviceLedsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    blinkDeviceLeds202ApplicationJsonObject?: Map<string, any>;
}
