import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarTrailersPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetSimilarTrailersQueryParams extends SpeakeasyBase {
    excludeArtistIds?: string[];
    fields?: shared.ItemFieldsEnum[];
    limit?: number;
    userId?: string;
}
export declare class GetSimilarTrailersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSimilarTrailersRequest extends SpeakeasyBase {
    pathParams: GetSimilarTrailersPathParams;
    queryParams: GetSimilarTrailersQueryParams;
    security: GetSimilarTrailersSecurity;
}
export declare class GetSimilarTrailersResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
