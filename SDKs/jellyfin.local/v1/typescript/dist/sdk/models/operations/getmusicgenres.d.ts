import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMusicGenresQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    excludeItemTypes?: string[];
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    includeItemTypes?: string[];
    isFavorite?: boolean;
    limit?: number;
    nameLessThan?: string;
    nameStartsWith?: string;
    nameStartsWithOrGreater?: string;
    parentId?: string;
    searchTerm?: string;
    startIndex?: number;
    userId?: string;
}
export declare class GetMusicGenresSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMusicGenresRequest extends SpeakeasyBase {
    queryParams: GetMusicGenresQueryParams;
    security: GetMusicGenresSecurity;
}
export declare class GetMusicGenresResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
