import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceContentFilteringPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum {
    TopSites = "topSites",
    FullList = "fullList"
}
export declare class UpdateNetworkApplianceContentFilteringRequestBody extends SpeakeasyBase {
    allowedUrlPatterns?: string[];
    blockedUrlCategories?: string[];
    blockedUrlPatterns?: string[];
    urlCategoryListSize?: UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;
}
export declare class UpdateNetworkApplianceContentFilteringRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceContentFilteringPathParams;
    request?: UpdateNetworkApplianceContentFilteringRequestBody;
}
export declare class UpdateNetworkApplianceContentFilteringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceContentFiltering200ApplicationJsonObject?: Map<string, any>;
}
