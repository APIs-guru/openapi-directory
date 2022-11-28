import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLiveTvProgramsQueryParams extends SpeakeasyBase {
    channelIds?: string[];
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    genreIds?: string[];
    genres?: string[];
    hasAired?: boolean;
    imageTypeLimit?: number;
    isAiring?: boolean;
    isKids?: boolean;
    isMovie?: boolean;
    isNews?: boolean;
    isSeries?: boolean;
    isSports?: boolean;
    librarySeriesId?: string;
    limit?: number;
    maxEndDate?: Date;
    maxStartDate?: Date;
    minEndDate?: Date;
    minStartDate?: Date;
    seriesTimerId?: string;
    sortBy?: string;
    sortOrder?: string;
    startIndex?: number;
    userId?: string;
}
export declare class GetLiveTvProgramsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLiveTvProgramsRequest extends SpeakeasyBase {
    queryParams: GetLiveTvProgramsQueryParams;
    security: GetLiveTvProgramsSecurity;
}
export declare class GetLiveTvProgramsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
