import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesTagsFormatPathParams extends SpeakeasyBase {
    format: string;
}
export declare class GetResourcesTagsFormatQueryParams extends SpeakeasyBase {
    max?: number;
    mediaId?: number;
    name?: string;
    nameContains?: string;
    offset?: number;
    sort?: string;
    typeId?: number;
    typeName?: string;
}
export declare class GetResourcesTagsFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesTagsFormatPathParams;
    queryParams: GetResourcesTagsFormatQueryParams;
}
export declare class GetResourcesTagsFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagMarshallerWrappeds?: shared.TagMarshallerWrapped[];
}
