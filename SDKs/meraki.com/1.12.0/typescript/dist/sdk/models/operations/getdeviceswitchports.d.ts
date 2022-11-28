import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchPortsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceSwitchPortsRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchPortsPathParams;
}
export declare class GetDeviceSwitchPortsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchPorts200ApplicationJsonObject?: Map<string, any>;
}
