import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingContentCategoriesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingContentCategoriesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingContentCategoriesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingContentCategoriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingContentCategoriesListSortFieldEnum;
    sortOrder?: DfareportingContentCategoriesListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingContentCategoriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingContentCategoriesListRequest extends SpeakeasyBase {
    pathParams: DfareportingContentCategoriesListPathParams;
    queryParams: DfareportingContentCategoriesListQueryParams;
    security: DfareportingContentCategoriesListSecurity;
}
export declare class DfareportingContentCategoriesListResponse extends SpeakeasyBase {
    contentCategoriesListResponse?: shared.ContentCategoriesListResponse;
    contentType: string;
    statusCode: number;
}
