import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesTagsIdMediaFormatPathParams extends SpeakeasyBase {
    format: string;
    id: number;
}
export declare class GetResourcesTagsIdMediaFormatQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
    sort?: string;
}
export declare class GetResourcesTagsIdMediaFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesTagsIdMediaFormatPathParams;
    queryParams: GetResourcesTagsIdMediaFormatQueryParams;
}
export declare class GetResourcesTagsIdMediaFormatResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
}
