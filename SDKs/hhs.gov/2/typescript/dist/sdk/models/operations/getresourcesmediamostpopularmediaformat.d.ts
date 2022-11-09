import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesMediaMostPopularMediaFormatPathParams extends SpeakeasyBase {
    format: string;
}
export declare class GetResourcesMediaMostPopularMediaFormatQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
}
export declare class GetResourcesMediaMostPopularMediaFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesMediaMostPopularMediaFormatPathParams;
    queryParams: GetResourcesMediaMostPopularMediaFormatQueryParams;
}
export declare class GetResourcesMediaMostPopularMediaFormatResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
}
