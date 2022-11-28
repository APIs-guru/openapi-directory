import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingAccountsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingAccountsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingAccountsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    active?: boolean;
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
    sortField?: DfareportingAccountsListSortFieldEnum;
    sortOrder?: DfareportingAccountsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingAccountsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountsListRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountsListPathParams;
    queryParams: DfareportingAccountsListQueryParams;
    security: DfareportingAccountsListSecurity;
}
export declare class DfareportingAccountsListResponse extends SpeakeasyBase {
    accountsListResponse?: shared.AccountsListResponse;
    contentType: string;
    statusCode: number;
}
