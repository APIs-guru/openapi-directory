import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetReviewsSearchJsonCriticsPickEnum {
    Y = "Y",
    N = "N"
}
export declare class GetReviewsSearchJsonQueryParams extends SpeakeasyBase {
    criticsPick?: GetReviewsSearchJsonCriticsPickEnum;
    offset?: number;
    openingDate?: string;
    order?: string;
    publicationDate?: string;
    query?: string;
    reviewer?: string;
}
export declare class GetReviewsSearchJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Movie[];
    status?: string;
}
export declare class GetReviewsSearchJsonRequest extends SpeakeasyBase {
    queryParams: GetReviewsSearchJsonQueryParams;
}
export declare class GetReviewsSearchJsonResponse extends SpeakeasyBase {
    contentType: string;
    getReviewsSearchJson200ApplicationJsonObject?: GetReviewsSearchJson200ApplicationJson;
    statusCode: number;
}
