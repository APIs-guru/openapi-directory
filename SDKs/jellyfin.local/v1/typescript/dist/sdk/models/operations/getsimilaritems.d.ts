import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarItemsPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetSimilarItemsQueryParams extends SpeakeasyBase {
    excludeArtistIds?: string[];
    fields?: shared.ItemFieldsEnum[];
    limit?: number;
    userId?: string;
}
export declare class GetSimilarItemsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSimilarItemsRequest extends SpeakeasyBase {
    pathParams: GetSimilarItemsPathParams;
    queryParams: GetSimilarItemsQueryParams;
    security: GetSimilarItemsSecurity;
}
export declare class GetSimilarItemsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
