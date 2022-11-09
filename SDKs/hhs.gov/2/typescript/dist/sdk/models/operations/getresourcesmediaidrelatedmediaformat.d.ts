import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesMediaIdRelatedMediaFormatPathParams extends SpeakeasyBase {
    format: string;
    id: number;
}
export declare class GetResourcesMediaIdRelatedMediaFormatQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
    sort?: string;
}
export declare class GetResourcesMediaIdRelatedMediaFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesMediaIdRelatedMediaFormatPathParams;
    queryParams: GetResourcesMediaIdRelatedMediaFormatQueryParams;
}
export declare class GetResourcesMediaIdRelatedMediaFormatResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
}
