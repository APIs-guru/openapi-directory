import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetReviewsResourceTypeJsonResourceTypeEnum {
    All = "all",
    Picks = "picks"
}
export declare class GetReviewsResourceTypeJsonPathParams extends SpeakeasyBase {
    resourceType: GetReviewsResourceTypeJsonResourceTypeEnum;
}
export declare enum GetReviewsResourceTypeJsonOrderEnum {
    ByTitle = "by-title",
    ByPublicationDate = "by-publication-date",
    ByOpeningDate = "by-opening-date"
}
export declare class GetReviewsResourceTypeJsonQueryParams extends SpeakeasyBase {
    offset?: number;
    order?: GetReviewsResourceTypeJsonOrderEnum;
}
export declare class GetReviewsResourceTypeJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Movie[];
    status?: string;
}
export declare class GetReviewsResourceTypeJsonRequest extends SpeakeasyBase {
    pathParams: GetReviewsResourceTypeJsonPathParams;
    queryParams: GetReviewsResourceTypeJsonQueryParams;
}
export declare class GetReviewsResourceTypeJsonResponse extends SpeakeasyBase {
    contentType: string;
    getReviewsResourceTypeJson200ApplicationJsonObject?: GetReviewsResourceTypeJson200ApplicationJson;
    statusCode: number;
}
