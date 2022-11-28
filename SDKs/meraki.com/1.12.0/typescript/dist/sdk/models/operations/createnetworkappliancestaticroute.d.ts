import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkApplianceStaticRoutePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkApplianceStaticRouteRequestBody extends SpeakeasyBase {
    gatewayIp: string;
    name: string;
    subnet: string;
}
export declare class CreateNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
    pathParams: CreateNetworkApplianceStaticRoutePathParams;
    request: CreateNetworkApplianceStaticRouteRequestBody;
}
export declare class CreateNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkApplianceStaticRoute201ApplicationJsonObject?: Map<string, any>;
}
