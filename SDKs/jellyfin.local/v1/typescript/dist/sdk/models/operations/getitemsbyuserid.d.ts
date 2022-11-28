import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemsByUserIdPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetItemsByUserIdQueryParams extends SpeakeasyBase {
    adjacentTo?: string;
    albumArtistIds?: string[];
    albumIds?: string[];
    albums?: string[];
    artistIds?: string[];
    artists?: string[];
    collapseBoxSetItems?: boolean;
    contributingArtistIds?: string[];
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
    excludeArtistIds?: string[];
    excludeItemIds?: string[];
    excludeItemTypes?: string[];
    excludeLocationTypes?: shared.LocationTypeEnum[];
    fields?: shared.ItemFieldsEnum[];
    filters?: shared.ItemFilterEnum[];
    genreIds?: string[];
    genres?: string[];
    hasImdbId?: boolean;
    hasOfficialRating?: boolean;
    hasOverview?: boolean;
    hasParentalRating?: boolean;
    hasSpecialFeature?: boolean;
    hasSubtitles?: boolean;
    hasThemeSong?: boolean;
    hasThemeVideo?: boolean;
    hasTmdbId?: boolean;
    hasTrailer?: boolean;
    hasTvdbId?: boolean;
    ids?: string[];
    imageTypeLimit?: number;
    imageTypes?: shared.ImageTypeEnum[];
    includeItemTypes?: string[];
    is3D?: boolean;
    is4K?: boolean;
    isFavorite?: boolean;
    isHd?: boolean;
    isLocked?: boolean;
    isMissing?: boolean;
    isPlaceHolder?: boolean;
    isPlayed?: boolean;
    isUnaired?: boolean;
    limit?: number;
    locationTypes?: shared.LocationTypeEnum[];
    maxHeight?: number;
    maxOfficialRating?: string;
    maxPremiereDate?: Date;
    maxWidth?: number;
    mediaTypes?: string[];
    minCommunityRating?: number;
    minCriticRating?: number;
    minDateLastSaved?: Date;
    minDateLastSavedForUser?: Date;
    minHeight?: number;
    minOfficialRating?: string;
    minPremiereDate?: Date;
    minWidth?: number;
    nameLessThan?: string;
    nameStartsWith?: string;
    nameStartsWithOrGreater?: string;
    officialRatings?: string[];
    parentId?: string;
    parentIndexNumber?: number;
    person?: string;
    personIds?: string[];
    personTypes?: string[];
    recursive?: boolean;
    searchTerm?: string;
    seriesStatus?: shared.SeriesStatusEnum[];
    sortBy?: string;
    sortOrder?: string;
    startIndex?: number;
    studioIds?: string[];
    studios?: string[];
    tags?: string[];
    videoTypes?: shared.VideoTypeEnum[];
    years?: number[];
}
export declare class GetItemsByUserIdSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetItemsByUserIdRequest extends SpeakeasyBase {
    pathParams: GetItemsByUserIdPathParams;
    queryParams: GetItemsByUserIdQueryParams;
    security: GetItemsByUserIdSecurity;
}
export declare class GetItemsByUserIdResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
