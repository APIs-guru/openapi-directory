import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsPermissionsCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class TagmanagerAccountsPermissionsCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsPermissionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsPermissionsCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsPermissionsCreatePathParams;
    queryParams: TagmanagerAccountsPermissionsCreateQueryParams;
    request?: shared.UserAccess;
    security: TagmanagerAccountsPermissionsCreateSecurity;
}
export declare class TagmanagerAccountsPermissionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userAccess?: shared.UserAccess;
}
