import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationNetworksPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum GetOrganizationNetworksTagsFilterTypeEnum {
    WithAnyTags = "withAnyTags",
    WithAllTags = "withAllTags"
}
export declare class GetOrganizationNetworksQueryParams extends SpeakeasyBase {
    configTemplateId?: string;
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
    tags?: string[];
    tagsFilterType?: GetOrganizationNetworksTagsFilterTypeEnum;
}
export declare class GetOrganizationNetworksRequest extends SpeakeasyBase {
    pathParams: GetOrganizationNetworksPathParams;
    queryParams: GetOrganizationNetworksQueryParams;
}
export declare class GetOrganizationNetworksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationNetworks200ApplicationJsonObject?: Map<string, any>;
}
