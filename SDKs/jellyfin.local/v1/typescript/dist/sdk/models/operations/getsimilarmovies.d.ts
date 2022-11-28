import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarMoviesPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetSimilarMoviesQueryParams extends SpeakeasyBase {
    excludeArtistIds?: string[];
    fields?: shared.ItemFieldsEnum[];
    limit?: number;
    userId?: string;
}
export declare class GetSimilarMoviesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSimilarMoviesRequest extends SpeakeasyBase {
    pathParams: GetSimilarMoviesPathParams;
    queryParams: GetSimilarMoviesQueryParams;
    security: GetSimilarMoviesSecurity;
}
export declare class GetSimilarMoviesResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
