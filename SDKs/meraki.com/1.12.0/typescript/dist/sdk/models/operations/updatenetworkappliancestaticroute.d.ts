import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceStaticRoutePathParams extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
}
export declare class UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges extends SpeakeasyBase {
    comment: string;
    end: string;
    start: string;
}
export declare class UpdateNetworkApplianceStaticRouteRequestBody extends SpeakeasyBase {
    enabled?: boolean;
    fixedIpAssignments?: Map<string, any>;
    gatewayIp?: string;
    name?: string;
    reservedIpRanges?: UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges[];
    subnet?: string;
}
export declare class UpdateNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceStaticRoutePathParams;
    request?: UpdateNetworkApplianceStaticRouteRequestBody;
}
export declare class UpdateNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
