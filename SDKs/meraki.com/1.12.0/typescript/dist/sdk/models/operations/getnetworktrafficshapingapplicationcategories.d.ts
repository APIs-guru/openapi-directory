import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkTrafficShapingApplicationCategoriesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkTrafficShapingApplicationCategoriesRequest extends SpeakeasyBase {
    pathParams: GetNetworkTrafficShapingApplicationCategoriesPathParams;
}
export declare class GetNetworkTrafficShapingApplicationCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkTrafficShapingApplicationCategories200ApplicationJsonObject?: Map<string, any>;
}
