import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingUserRolesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingUserRolesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingUserRolesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    accountUserRoleOnly?: boolean;
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
    sortField?: DfareportingUserRolesListSortFieldEnum;
    sortOrder?: DfareportingUserRolesListSortOrderEnum;
    subaccountId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingUserRolesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolesListRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolesListPathParams;
    queryParams: DfareportingUserRolesListQueryParams;
    security: DfareportingUserRolesListSecurity;
}
export declare class DfareportingUserRolesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRolesListResponse?: shared.UserRolesListResponse;
}
