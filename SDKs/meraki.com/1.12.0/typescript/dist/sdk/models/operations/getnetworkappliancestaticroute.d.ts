import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceStaticRoutePathParams extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
}
export declare class GetNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceStaticRoutePathParams;
}
export declare class GetNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
