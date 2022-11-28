import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchStackRoutingInterfacesPathParams extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class GetNetworkSwitchStackRoutingInterfacesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchStackRoutingInterfacesPathParams;
}
export declare class GetNetworkSwitchStackRoutingInterfacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchStackRoutingInterfaces200ApplicationJsonObject?: Map<string, any>;
}
