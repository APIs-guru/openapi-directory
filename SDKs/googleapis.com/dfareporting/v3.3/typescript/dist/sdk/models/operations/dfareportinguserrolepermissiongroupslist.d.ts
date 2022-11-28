import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolePermissionGroupsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingUserRolePermissionGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingUserRolePermissionGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolePermissionGroupsListRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolePermissionGroupsListPathParams;
    queryParams: DfareportingUserRolePermissionGroupsListQueryParams;
    security: DfareportingUserRolePermissionGroupsListSecurity;
}
export declare class DfareportingUserRolePermissionGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRolePermissionGroupsListResponse?: shared.UserRolePermissionGroupsListResponse;
}
