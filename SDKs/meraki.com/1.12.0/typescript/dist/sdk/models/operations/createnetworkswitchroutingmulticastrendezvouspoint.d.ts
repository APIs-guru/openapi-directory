import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody extends SpeakeasyBase {
    interfaceIp: string;
    multicastGroup: string;
}
export declare class CreateNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams;
    request: CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
}
export declare class CreateNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJsonObject?: Map<string, any>;
}
