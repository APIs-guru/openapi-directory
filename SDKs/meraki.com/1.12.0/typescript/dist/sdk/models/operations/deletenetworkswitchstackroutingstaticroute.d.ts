import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkSwitchStackRoutingStaticRoutePathParams extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
    switchStackId: string;
}
export declare class DeleteNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkSwitchStackRoutingStaticRoutePathParams;
}
export declare class DeleteNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
