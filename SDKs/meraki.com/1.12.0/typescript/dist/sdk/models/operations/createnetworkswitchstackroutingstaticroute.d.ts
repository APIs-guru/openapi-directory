import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSwitchStackRoutingStaticRoutePathParams extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class CreateNetworkSwitchStackRoutingStaticRouteRequestBody extends SpeakeasyBase {
    advertiseViaOspfEnabled?: boolean;
    name?: string;
    nextHopIp: string;
    preferOverOspfRoutesEnabled?: boolean;
    subnet: string;
}
export declare class CreateNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSwitchStackRoutingStaticRoutePathParams;
    request: CreateNetworkSwitchStackRoutingStaticRouteRequestBody;
}
export declare class CreateNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSwitchStackRoutingStaticRoute201ApplicationJsonObject?: Map<string, any>;
}
