import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolePermissionsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingUserRolePermissionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingUserRolePermissionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolePermissionsListRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolePermissionsListPathParams;
    queryParams: DfareportingUserRolePermissionsListQueryParams;
    security: DfareportingUserRolePermissionsListSecurity;
}
export declare class DfareportingUserRolePermissionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRolePermissionsListResponse?: shared.UserRolePermissionsListResponse;
}
