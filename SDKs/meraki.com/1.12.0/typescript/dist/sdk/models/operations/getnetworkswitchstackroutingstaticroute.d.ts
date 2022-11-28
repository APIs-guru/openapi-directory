import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchStackRoutingStaticRoutePathParams extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
    switchStackId: string;
}
export declare class GetNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchStackRoutingStaticRoutePathParams;
}
export declare class GetNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchStackRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
