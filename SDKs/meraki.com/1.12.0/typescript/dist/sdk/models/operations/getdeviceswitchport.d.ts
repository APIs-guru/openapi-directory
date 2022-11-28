import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchPortPathParams extends SpeakeasyBase {
    portId: string;
    serial: string;
}
export declare class GetDeviceSwitchPortRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchPortPathParams;
}
export declare class GetDeviceSwitchPortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchPort200ApplicationJsonObject?: Map<string, any>;
}
