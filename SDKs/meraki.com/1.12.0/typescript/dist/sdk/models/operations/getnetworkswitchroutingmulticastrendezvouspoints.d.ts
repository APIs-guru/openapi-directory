import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams;
}
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJsonObject?: Map<string, any>;
}
