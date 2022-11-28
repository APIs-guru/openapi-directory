import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolePermissionsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingUserRolePermissionsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingUserRolePermissionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolePermissionsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolePermissionsGetPathParams;
    queryParams: DfareportingUserRolePermissionsGetQueryParams;
    security: DfareportingUserRolePermissionsGetSecurity;
}
export declare class DfareportingUserRolePermissionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRolePermission?: shared.UserRolePermission;
}
