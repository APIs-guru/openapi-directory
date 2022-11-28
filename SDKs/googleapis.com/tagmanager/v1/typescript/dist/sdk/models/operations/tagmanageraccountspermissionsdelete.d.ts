import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsPermissionsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    permissionId: string;
}
export declare class TagmanagerAccountsPermissionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsPermissionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsPermissionsDeleteRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsPermissionsDeletePathParams;
    queryParams: TagmanagerAccountsPermissionsDeleteQueryParams;
    security: TagmanagerAccountsPermissionsDeleteSecurity;
}
export declare class TagmanagerAccountsPermissionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
