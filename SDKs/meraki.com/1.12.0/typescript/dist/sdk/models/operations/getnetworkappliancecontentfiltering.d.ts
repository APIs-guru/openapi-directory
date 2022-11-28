import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceContentFilteringPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceContentFilteringRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceContentFilteringPathParams;
}
export declare class GetNetworkApplianceContentFilteringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceContentFiltering200ApplicationJsonObject?: Map<string, any>;
}
