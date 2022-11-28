import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsPermissionsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    permissionId: string;
}
export declare class TagmanagerAccountsPermissionsUpdateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsPermissionsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsPermissionsUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsPermissionsUpdatePathParams;
    queryParams: TagmanagerAccountsPermissionsUpdateQueryParams;
    request?: shared.UserAccess;
    security: TagmanagerAccountsPermissionsUpdateSecurity;
}
export declare class TagmanagerAccountsPermissionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userAccess?: shared.UserAccess;
}
