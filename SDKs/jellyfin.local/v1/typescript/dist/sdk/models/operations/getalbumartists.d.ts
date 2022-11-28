import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlbumArtistsQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
    excludeItemTypes?: string[];
    fields?: shared.ItemFieldsEnum[];
    filters?: shared.ItemFilterEnum[];
    genreIds?: string[];
    genres?: string[];
    imageTypeLimit?: number;
    includeItemTypes?: string[];
    isFavorite?: boolean;
    limit?: number;
    mediaTypes?: string[];
    minCommunityRating?: number;
    nameLessThan?: string;
    nameStartsWith?: string;
    nameStartsWithOrGreater?: string;
    officialRatings?: string[];
    parentId?: string;
    person?: string;
    personIds?: string[];
    personTypes?: string[];
    searchTerm?: string;
    startIndex?: number;
    studioIds?: string[];
    studios?: string[];
    tags?: string[];
    userId?: string;
    years?: number[];
}
export declare class GetAlbumArtistsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetAlbumArtistsRequest extends SpeakeasyBase {
    queryParams: GetAlbumArtistsQueryParams;
    security: GetAlbumArtistsSecurity;
}
export declare class GetAlbumArtistsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
