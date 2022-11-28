import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesTagsIdRelatedFormatPathParams extends SpeakeasyBase {
    format: string;
    id: number;
}
export declare class GetResourcesTagsIdRelatedFormatQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
    sort?: string;
}
export declare class GetResourcesTagsIdRelatedFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesTagsIdRelatedFormatPathParams;
    queryParams: GetResourcesTagsIdRelatedFormatQueryParams;
}
export declare class GetResourcesTagsIdRelatedFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagMarshallerWrappeds?: shared.TagMarshallerWrapped[];
}
