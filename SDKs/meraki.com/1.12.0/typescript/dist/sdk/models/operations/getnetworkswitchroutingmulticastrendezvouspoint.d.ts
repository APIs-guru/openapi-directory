import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
    networkId: string;
    rendezvousPointId: string;
}
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchRoutingMulticastRendezvousPointPathParams;
}
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJsonObject?: Map<string, any>;
}
