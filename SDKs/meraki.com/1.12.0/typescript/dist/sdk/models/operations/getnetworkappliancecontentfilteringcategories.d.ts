import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceContentFilteringCategoriesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceContentFilteringCategoriesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceContentFilteringCategoriesPathParams;
}
export declare class GetNetworkApplianceContentFilteringCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceContentFilteringCategories200ApplicationJsonObject?: Map<string, any>;
}
