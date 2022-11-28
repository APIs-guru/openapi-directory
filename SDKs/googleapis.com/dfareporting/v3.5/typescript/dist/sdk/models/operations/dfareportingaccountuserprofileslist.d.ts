import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountUserProfilesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingAccountUserProfilesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingAccountUserProfilesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingAccountUserProfilesListQueryParams extends SpeakeasyBase {
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
    sortField?: DfareportingAccountUserProfilesListSortFieldEnum;
    sortOrder?: DfareportingAccountUserProfilesListSortOrderEnum;
    subaccountId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    userRoleId?: string;
}
export declare class DfareportingAccountUserProfilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountUserProfilesListRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountUserProfilesListPathParams;
    queryParams: DfareportingAccountUserProfilesListQueryParams;
    security: DfareportingAccountUserProfilesListSecurity;
}
export declare class DfareportingAccountUserProfilesListResponse extends SpeakeasyBase {
    accountUserProfilesListResponse?: shared.AccountUserProfilesListResponse;
    contentType: string;
    statusCode: number;
}
