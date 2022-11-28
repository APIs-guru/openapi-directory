import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsUserPermissionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsUserPermissionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsUserPermissionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsUserPermissionsListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsUserPermissionsListPathParams;
    queryParams: TagmanagerAccountsUserPermissionsListQueryParams;
    security: TagmanagerAccountsUserPermissionsListSecurity;
}
export declare class TagmanagerAccountsUserPermissionsListResponse extends SpeakeasyBase {
    contentType: string;
    listUserPermissionsResponse?: shared.ListUserPermissionsResponse;
    statusCode: number;
}
