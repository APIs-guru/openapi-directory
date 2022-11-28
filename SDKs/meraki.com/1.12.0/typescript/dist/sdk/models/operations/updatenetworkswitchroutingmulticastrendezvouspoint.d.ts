import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
    networkId: string;
    rendezvousPointId: string;
}
export declare class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody extends SpeakeasyBase {
    interfaceIp: string;
    multicastGroup: string;
}
export declare class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams;
    request: UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
}
export declare class UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJsonObject?: Map<string, any>;
}
