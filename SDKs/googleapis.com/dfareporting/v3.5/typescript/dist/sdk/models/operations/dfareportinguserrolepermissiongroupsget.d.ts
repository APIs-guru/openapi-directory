import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolePermissionGroupsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingUserRolePermissionGroupsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingUserRolePermissionGroupsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolePermissionGroupsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolePermissionGroupsGetPathParams;
    queryParams: DfareportingUserRolePermissionGroupsGetQueryParams;
    security: DfareportingUserRolePermissionGroupsGetSecurity;
}
export declare class DfareportingUserRolePermissionGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRolePermissionGroup?: shared.UserRolePermissionGroup;
}
