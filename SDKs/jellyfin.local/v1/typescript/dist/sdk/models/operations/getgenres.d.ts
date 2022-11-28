import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenresQueryParams extends SpeakeasyBase {
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
export declare class GetGenresSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetGenresRequest extends SpeakeasyBase {
    queryParams: GetGenresQueryParams;
    security: GetGenresSecurity;
}
export declare class GetGenresResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
