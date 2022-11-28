import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsPermissionsGetPathParams extends SpeakeasyBase {
    accountId: string;
    permissionId: string;
}
export declare class TagmanagerAccountsPermissionsGetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsPermissionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsPermissionsGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsPermissionsGetPathParams;
    queryParams: TagmanagerAccountsPermissionsGetQueryParams;
    security: TagmanagerAccountsPermissionsGetSecurity;
}
export declare class TagmanagerAccountsPermissionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userAccess?: shared.UserAccess;
}
