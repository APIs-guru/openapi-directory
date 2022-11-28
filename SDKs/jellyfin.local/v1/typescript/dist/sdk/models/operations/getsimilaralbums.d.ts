import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarAlbumsPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetSimilarAlbumsQueryParams extends SpeakeasyBase {
    excludeArtistIds?: string[];
    fields?: shared.ItemFieldsEnum[];
    limit?: number;
    userId?: string;
}
export declare class GetSimilarAlbumsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSimilarAlbumsRequest extends SpeakeasyBase {
    pathParams: GetSimilarAlbumsPathParams;
    queryParams: GetSimilarAlbumsQueryParams;
    security: GetSimilarAlbumsSecurity;
}
export declare class GetSimilarAlbumsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
