import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
    interfaceId: string;
    networkId: string;
    switchStackId: string;
}
export declare class GetNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchStackRoutingInterfacePathParams;
}
export declare class GetNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchStackRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
