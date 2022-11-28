import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsUserPermissionsUpdatePathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsUserPermissionsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fingerprint?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsUserPermissionsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsUserPermissionsUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsUserPermissionsUpdatePathParams;
    queryParams: TagmanagerAccountsUserPermissionsUpdateQueryParams;
    request?: shared.UserPermission;
    security: TagmanagerAccountsUserPermissionsUpdateSecurity;
}
export declare class TagmanagerAccountsUserPermissionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userPermission?: shared.UserPermission;
}
