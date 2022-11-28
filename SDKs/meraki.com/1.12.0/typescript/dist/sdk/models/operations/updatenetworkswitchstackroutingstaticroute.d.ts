import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchStackRoutingStaticRoutePathParams extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
    switchStackId: string;
}
export declare class UpdateNetworkSwitchStackRoutingStaticRouteRequestBody extends SpeakeasyBase {
    advertiseViaOspfEnabled?: boolean;
    name?: string;
    nextHopIp?: string;
    preferOverOspfRoutesEnabled?: boolean;
    subnet?: string;
}
export declare class UpdateNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchStackRoutingStaticRoutePathParams;
    request?: UpdateNetworkSwitchStackRoutingStaticRouteRequestBody;
}
export declare class UpdateNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchStackRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
