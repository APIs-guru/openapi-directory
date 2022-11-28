import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
    interfaceId: string;
    serial: string;
}
export declare class GetDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchRoutingInterfacePathParams;
}
export declare class GetDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
