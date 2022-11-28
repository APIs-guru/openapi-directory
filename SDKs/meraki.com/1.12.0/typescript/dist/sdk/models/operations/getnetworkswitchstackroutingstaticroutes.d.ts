import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchStackRoutingStaticRoutesPathParams extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class GetNetworkSwitchStackRoutingStaticRoutesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchStackRoutingStaticRoutesPathParams;
}
export declare class GetNetworkSwitchStackRoutingStaticRoutesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchStackRoutingStaticRoutes200ApplicationJsonObject?: Map<string, any>;
}
