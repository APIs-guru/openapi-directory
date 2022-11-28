import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsUserPermissionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsUserPermissionsCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsUserPermissionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsUserPermissionsCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsUserPermissionsCreatePathParams;
    queryParams: TagmanagerAccountsUserPermissionsCreateQueryParams;
    request?: shared.UserPermission;
    security: TagmanagerAccountsUserPermissionsCreateSecurity;
}
export declare class TagmanagerAccountsUserPermissionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userPermission?: shared.UserPermission;
}
