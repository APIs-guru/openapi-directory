import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryFiltersLegacyQueryParams extends SpeakeasyBase {
    includeItemTypes?: string[];
    mediaTypes?: string[];
    parentId?: string;
    userId?: string;
}
export declare class GetQueryFiltersLegacySecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetQueryFiltersLegacyRequest extends SpeakeasyBase {
    queryParams: GetQueryFiltersLegacyQueryParams;
    security: GetQueryFiltersLegacySecurity;
}
export declare class GetQueryFiltersLegacyResponse extends SpeakeasyBase {
    contentType: string;
    queryFiltersLegacy?: shared.QueryFiltersLegacy;
    statusCode: number;
}
