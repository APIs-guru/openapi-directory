import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceSwitchWarmSparePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class UpdateDeviceSwitchWarmSpareRequestBody extends SpeakeasyBase {
    enabled: boolean;
    spareSerial?: string;
}
export declare class UpdateDeviceSwitchWarmSpareRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceSwitchWarmSparePathParams;
    request: UpdateDeviceSwitchWarmSpareRequestBody;
}
export declare class UpdateDeviceSwitchWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceSwitchWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
