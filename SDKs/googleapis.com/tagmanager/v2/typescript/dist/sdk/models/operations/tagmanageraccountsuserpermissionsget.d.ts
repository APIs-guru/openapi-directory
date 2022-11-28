import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsUserPermissionsGetPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsUserPermissionsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    containerVersionId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsUserPermissionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsUserPermissionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsUserPermissionsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsUserPermissionsGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsUserPermissionsGetSecurityOption1;
    option2?: TagmanagerAccountsUserPermissionsGetSecurityOption2;
    option3?: TagmanagerAccountsUserPermissionsGetSecurityOption3;
}
export declare class TagmanagerAccountsUserPermissionsGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsUserPermissionsGetPathParams;
    queryParams: TagmanagerAccountsUserPermissionsGetQueryParams;
    security: TagmanagerAccountsUserPermissionsGetSecurity;
}
export declare class TagmanagerAccountsUserPermissionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userPermission?: shared.UserPermission;
}
