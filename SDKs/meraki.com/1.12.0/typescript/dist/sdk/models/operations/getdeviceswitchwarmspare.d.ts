import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchWarmSparePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceSwitchWarmSpareRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchWarmSparePathParams;
}
export declare class GetDeviceSwitchWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
