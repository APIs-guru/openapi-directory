import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryParams extends SpeakeasyBase {
    excludeItemTypes?: string[];
    includeArtists?: boolean;
    includeGenres?: boolean;
    includeItemTypes?: string[];
    includeMedia?: boolean;
    includePeople?: boolean;
    includeStudios?: boolean;
    isKids?: boolean;
    isMovie?: boolean;
    isNews?: boolean;
    isSeries?: boolean;
    isSports?: boolean;
    limit?: number;
    mediaTypes?: string[];
    parentId?: string;
    searchTerm: string;
    startIndex?: number;
    userId?: string;
}
export declare class GetSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRequest extends SpeakeasyBase {
    queryParams: GetQueryParams;
    security: GetSecurity;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    searchHintResult?: shared.SearchHintResult;
    statusCode: number;
}
