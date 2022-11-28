import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetResourcesTagsIdSyndicateFormatPathParams extends SpeakeasyBase {
    format: string;
    id: number;
}
export declare class GetResourcesTagsIdSyndicateFormatQueryParams extends SpeakeasyBase {
    displayMethod?: string;
}
export declare class GetResourcesTagsIdSyndicateFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesTagsIdSyndicateFormatPathParams;
    queryParams: GetResourcesTagsIdSyndicateFormatQueryParams;
}
export declare class GetResourcesTagsIdSyndicateFormatResponse extends SpeakeasyBase {
    contentType: string;
    getResourcesTagsIdSyndicateFormat200ApplicationJsonString?: string;
    statusCode: number;
}
