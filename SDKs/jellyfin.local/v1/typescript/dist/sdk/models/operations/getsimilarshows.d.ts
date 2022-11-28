import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarShowsPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetSimilarShowsQueryParams extends SpeakeasyBase {
    excludeArtistIds?: string[];
    fields?: shared.ItemFieldsEnum[];
    limit?: number;
    userId?: string;
}
export declare class GetSimilarShowsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSimilarShowsRequest extends SpeakeasyBase {
    pathParams: GetSimilarShowsPathParams;
    queryParams: GetSimilarShowsQueryParams;
    security: GetSimilarShowsSecurity;
}
export declare class GetSimilarShowsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
