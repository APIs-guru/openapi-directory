import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStudiosQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
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
export declare class GetStudiosSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetStudiosRequest extends SpeakeasyBase {
    queryParams: GetStudiosQueryParams;
    security: GetStudiosSecurity;
}
export declare class GetStudiosResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
