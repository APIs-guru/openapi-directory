import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryFiltersQueryParams extends SpeakeasyBase {
    includeItemTypes?: string[];
    isAiring?: boolean;
    isKids?: boolean;
    isMovie?: boolean;
    isNews?: boolean;
    isSeries?: boolean;
    isSports?: boolean;
    parentId?: string;
    recursive?: boolean;
    userId?: string;
}
export declare class GetQueryFiltersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetQueryFiltersRequest extends SpeakeasyBase {
    queryParams: GetQueryFiltersQueryParams;
    security: GetQueryFiltersSecurity;
}
export declare class GetQueryFiltersResponse extends SpeakeasyBase {
    contentType: string;
    queryFilters?: shared.QueryFilters;
    statusCode: number;
}
