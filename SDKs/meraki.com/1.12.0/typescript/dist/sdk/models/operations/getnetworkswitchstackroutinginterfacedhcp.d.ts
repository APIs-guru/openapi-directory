import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchStackRoutingInterfaceDhcpPathParams extends SpeakeasyBase {
    interfaceId: string;
    networkId: string;
    switchStackId: string;
}
export declare class GetNetworkSwitchStackRoutingInterfaceDhcpRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchStackRoutingInterfaceDhcpPathParams;
}
export declare class GetNetworkSwitchStackRoutingInterfaceDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJsonObject?: Map<string, any>;
}
