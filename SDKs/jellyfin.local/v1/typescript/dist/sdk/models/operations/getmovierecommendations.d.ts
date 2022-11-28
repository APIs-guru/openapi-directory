import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMovieRecommendationsQueryParams extends SpeakeasyBase {
    categoryLimit?: number;
    fields?: shared.ItemFieldsEnum[];
    itemLimit?: number;
    parentId?: string;
    userId?: string;
}
export declare class GetMovieRecommendationsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMovieRecommendationsRequest extends SpeakeasyBase {
    queryParams: GetMovieRecommendationsQueryParams;
    security: GetMovieRecommendationsSecurity;
}
export declare class GetMovieRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    recommendationDtos?: shared.RecommendationDto[];
    statusCode: number;
}
