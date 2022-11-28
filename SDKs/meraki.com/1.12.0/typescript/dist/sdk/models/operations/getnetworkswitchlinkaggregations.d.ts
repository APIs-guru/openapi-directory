import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchLinkAggregationsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchLinkAggregationsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchLinkAggregationsPathParams;
}
export declare class GetNetworkSwitchLinkAggregationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchLinkAggregations200ApplicationJsonObject?: Map<string, any>;
}
