import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarArtistsPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetSimilarArtistsQueryParams extends SpeakeasyBase {
    excludeArtistIds?: string[];
    fields?: shared.ItemFieldsEnum[];
    limit?: number;
    userId?: string;
}
export declare class GetSimilarArtistsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSimilarArtistsRequest extends SpeakeasyBase {
    pathParams: GetSimilarArtistsPathParams;
    queryParams: GetSimilarArtistsQueryParams;
    security: GetSimilarArtistsSecurity;
}
export declare class GetSimilarArtistsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
