import { SpeakeasyBase } from "../../../internal/utils";
export declare class CycleDeviceSwitchPortsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class CycleDeviceSwitchPortsRequestBody extends SpeakeasyBase {
    ports: string[];
}
export declare class CycleDeviceSwitchPortsRequest extends SpeakeasyBase {
    pathParams: CycleDeviceSwitchPortsPathParams;
    request: CycleDeviceSwitchPortsRequestBody;
}
export declare class CycleDeviceSwitchPortsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cycleDeviceSwitchPorts200ApplicationJsonObject?: Map<string, any>;
}
