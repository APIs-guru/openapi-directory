import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchRoutingInterfaceDhcpPathParams extends SpeakeasyBase {
    interfaceId: string;
    serial: string;
}
export declare class GetDeviceSwitchRoutingInterfaceDhcpRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchRoutingInterfaceDhcpPathParams;
}
export declare class GetDeviceSwitchRoutingInterfaceDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchRoutingInterfaceDhcp200ApplicationJsonObject?: Map<string, any>;
}
