import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsPermissionsListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class TagmanagerAccountsPermissionsListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsPermissionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsPermissionsListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsPermissionsListPathParams;
    queryParams: TagmanagerAccountsPermissionsListQueryParams;
    security: TagmanagerAccountsPermissionsListSecurity;
}
export declare class TagmanagerAccountsPermissionsListResponse extends SpeakeasyBase {
    contentType: string;
    listAccountUsersResponse?: shared.ListAccountUsersResponse;
    statusCode: number;
}
