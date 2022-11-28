import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetYearsQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    excludeItemTypes?: string[];
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    includeItemTypes?: string[];
    limit?: number;
    mediaTypes?: string[];
    parentId?: string;
    recursive?: boolean;
    sortBy?: string;
    sortOrder?: string;
    startIndex?: number;
    userId?: string;
}
export declare class GetYearsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetYearsRequest extends SpeakeasyBase {
    queryParams: GetYearsQueryParams;
    security: GetYearsSecurity;
}
export declare class GetYearsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
